# Experian demo widgets

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Example Usage
In the Widget Builder JS section, it can be used like this:
```js
// (given the result is deployed at `https://experian-apps.vercel.app`)
const widgetsHandlerScript = 'https://experian-apps.vercel.app/experian-widgets.js';

// fetches the script, and waits for it to load
api.scripts.loadScript(widgetsHandlerScript).then(() => {
    // given that the script exposes the `experianWidgets` namespace, we fire the `renderWidget` method
    // that dispatches the rendering. We ask it to fetch the 'charts' widget,
    // pass it the container (`element`) and the props
    window.experianWidgets.renderWidget('charts', element, {
        title: data.config.title,
        chartType: data.config.chartType,
        hasTooltip: data.config.hasTooltip,
        accountSelector: data.config.accountSelector
    })
});
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
