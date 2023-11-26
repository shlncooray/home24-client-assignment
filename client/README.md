# h24-tech-task-client by Shelan Leonardo Cooray

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TypeScript template.

## Frameworks used

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Google’s [Material Design](https://material.io) through [Material-UI](https://mui.com).
- [React Hook Form](https://react-hook-form.com/) - for building forms with validations.
- Routing with [React Router](https://reactrouter.com)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Find and fix problems in code with [Eslint](https://eslint.org/)
- Format code with [Prettier](https://prettier.io/)
- Avoid errors and enforce conventions in styles with [stylelint](https://stylelint.io/).
- Commit convention made easy with [Commitlint](https://commitlint.js.org/#/)
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for unit testing.
- [Cypres](https://www.cypress.io/) for End-to-end tests and integration testing


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Lints project files according to [Airbnb](https://github.com/airbnb/javascript) — as part of their style guide — it provides an ESLint configuration that anyone can use and it is the standard.

### `yarn lint-fix`

Fix lints issues according to style guide set.

### `yarn format`

Format the code with prettier

### `yarn lint-staged`

Fix lints issues according to style guide set

### `yarn coverage`

Create a test coverage report.

### `yarn prepare`

Enable git hooks

## File Structure

```shell script
├── .env # dotenv config file
├── .eslintrc.json # eslint configurations
├── .commitlintrc.json # commitlint config file
├── .prettierrc.json # prettier configurations
├── .stylelintrc # stylelint configurations
├── nginx.conf # nginx configurations
├── package.json
├── .gitignore
├── jsconfig.json # absolute path configurations
├── README.md # this file
├── public # public assets
└── src
    ├── components # React components folder
    ├── features # features folder
    ├── hooks # custom react hooks
    ├── pages
    ├── resources #images and other project resources
    ├── store # redux store
    ├── styles
    ├── App.jsx # main component
    ├── index.css
    ├── index.js # entry point file
    └── setupTests.js # configuration to run jest tests
    └── project.config.json # configuration to run jest tests
```

## Code quality tools

Code quality tools provide static check of your code and try to fix errors. Checks are triggered inside pre-commit hook.

### Eslint

ESLint is designed to be flexible and configurable for your use case. You can turn off every rule and run only with basic syntax validation or mix and match the bundled rules and your custom rules to fit the needs of your project. This template use lint set according to [Airbnb](https://github.com/airbnb/javascript) style guide — as part of their style guide with custom set, tailored for reasonable and clean development process.`.eslintrc` file specify configuration information for an entire directory and all of its subdirectories.

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. `.prettierrc` file specify formatting configurations of this template.

### Stylelint

Template includes [Stylelint](https://stylelint.io/), to check CSS/SASS/LESS files. It is using [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) rule set. `.stylelintrc` file specify styling configurations of this template.

## State Management

Template provides basic Redux configuration with [Redux Toolkit](https://redux-toolkit.js.org/). You can use [Redux DevTools](https://github.com/reduxjs/redux-devtools) to power-up [Redux](https://redux.js.org/) development workflow or any other architecture which handles the state change

## Routing

Template use [React Router](https://reactrouter.com/docs/en/v6) standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL

## Testing

This template uses [Jest](https://jestjs.io/) JavaScript test runner that lets you access the DOM via jsdom. Jest offers functions for test suites, test cases, and assertions. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is a set of helpers that let you test React components without relying on their implementation details

### Unit Testing

Unit Testing supported with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) that works with [Jest](https://github.com/facebook/jest). Refer the official docs about [running tests](https://create-react-app.dev/docs/running-tests/) for more information

```
$ yarn run test
```

### Coverage

To set coverage this template uses Jest. Jest allow us to create reports in different format and set where we want to collect these reports from (or not collect them from), as well as ensure the coverageThreshold.Coverage report can be open using coverage/lcov-report/index.html file

```
$ yarn run coverage
```

### E2E Testing

E2E testing provided by [Cypress](https://www.cypress.io/).

```
$ yarn run e2e-test
```

for more information about testing.

- [React Docs](https://reactjs.org/docs/testing.html)
- [Create React App Docs](https://create-react-app.dev/docs/running-tests/)

## Build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. See the [production build](https://create-react-app.dev/docs/production-build/) section for more information.

```
$ npm run build
```

