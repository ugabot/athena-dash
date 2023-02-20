# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Calling the API.

Currently, the API is being called with a proxied endpoint. To call the API directly, please change the url in the `use-data-api` url param. (Can use the `givenApi` variable in the same file.).

To call the API with the proxy, run the `yarn proxy` script (See `Available Scripts` below)

## Available Scripts

In the project directory, you can run:

### `yarn add`
Installs the dependencies.

### `yarn proxy`
Starts the `local-cors-proxy` server locally.
Note: This is not necessary if you are not having CORs issues. 

If using the `cors-anywhere` proxy instead, there is no need to run this script, but might need to request access. Please see the below snippet from https://github.com/Rob--W/cors-anywhere/issues/301 .
```
As announced, the public demo has been restricted. If you are developing a new web application and want to try out CORS Anywhere, visit https://cors-anywhere.herokuapp.com/corsdemo and click on the "Request temporary access to the demo server" button, to temporarily restore the full functionality of CORS Anywhere for your client only.
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
