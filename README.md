# Colors Application

## Install Dependencies

In the project directory, you can run:

### `yarn install`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Dependencies used

1. We have used [https://www.kaggle.com/rtatman/color-terms-dataset](this) data set for getting color of the given words. This CSV file is downloaded and added within public/ directory of the application. This file is read at client side using fetch API and converted to an object.
2. We have used the color names and hex codes for all browser supported colors from [https://www.w3schools.com/colors/colors_names.asp](here).
3. We have used [https://github.com/noeldelgado/values.js](this) library to generate shades and tints of the given hex color which is shown in the masonary grid.
