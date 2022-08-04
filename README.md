# Hello Finn

## Tech stack
React, Typescript, Material Ui, CRA

I could have add React-Query, but it wouldn't change how solution works 
And my time is limited ;) 

There is error in the console about adding prop
"non-boolean attribute `favorite`" - i recall there was a fix with styled components
you could add $ sign to prop name, and it would fix it, but latest version of `MUI` uses
`emotion` which have similar api to `styled-components` but somehow this fix isn't working and  and i don't have time for searching github issues to find out why ;) 

also - it's only test task ;)

What's more - i've used `kebab-case` for folder names and files as ->
" in a perfect world, we would be using a kebab-case naming convention 
for all folders and files, because PascalCase named folders/files are 
handled differently in the diversity of operating systems which may lead 
to bugs when working with teams using different OSs."

- there is test to check if search works 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
