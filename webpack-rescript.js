const pkg = require("./package.json");

module.exports = {
  webpack: (config) => {
    const styleLoader = require.resolve("style-loader");

    let overriden = {
      ...config,
      output: {
        ...config.output,
        publicPath: 'auto',
        filename: "exparion-widgets.js",
        library: 'exparionWidgets',
      },
      optimization: {
        splitChunks: {
          chunks: "async",
        },
      },
      plugins: [...config.plugins],
    };

    let module = config.module;
    let styleFiles = ["scss", "sass", "css"];

    if (config.mode !== "production") {
      return overriden;
    }

    const loadersConfig = module.rules.filter((rule) => !!rule.oneOf);

    loadersConfig.forEach((loaderConfig) => {
      loaderConfig.oneOf.forEach((loader) => {
        if (!loader.use) {
          return;
        }

        const loaderIsForCss =
          loader.test &&
          styleFiles.some((fileType) =>
            loader.test.toString().includes(fileType)
          );
        if (!loaderIsForCss) {
          return;
        }

        loader.use = [{ loader: styleLoader }, ...loader.use].filter(
          (subLoader) => {
            if (!subLoader.loader) {
              return true;
            }
            return !(
              subLoader.loader.includes("mini-css") ||
              subLoader.loader.includes("postcss")
            );
          }
        );
      });
    });

    return overriden;
  },
};
