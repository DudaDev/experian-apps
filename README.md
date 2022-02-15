# Experian demo widgets

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Example Usage
In the Widget Builder JS section, it can be used like this (if it is deployed at `https://experian-apps.vercel.app/experian-widgets.js`):
```js
const widgetsHandlerScript = 'https://experian-apps.vercel.app/experian-widgets.js';

api.scripts.loadScript(widgetsHandlerScript).then(() => {
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
