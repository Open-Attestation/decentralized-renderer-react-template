# decentralized-renderer-react-template

React boilerplate to write decentralize renderer.

## Install

The easiest way to use **decentralized-renderer-react-template** is through github by clicking on `Use this template` button in the repository page.

You can also download or `git clone` this repo

```sh
$ git clone https://github.com/Open-Attestation/decentralized-renderer-react-template.git my-module
$ cd my-module
$ rm -rf .git
$ npm install
```

Make sure to edit the following files according to your module's info:

- package.json (module name and version)
- README.md
- LICENSE
- add your own template (in `src/templates` folder) and configure correctly the template registry (in `src/templates/index.tsx` file)

## Commands

```sh
$ npm run storybook # open storybook and start editing your components
$ npm run storybook:build # generate docs
$ npm run test:watch # run tests with Jest
$ npm run test:coverage # run tests with coverage
$ npm run lint # lint code
$ npm run build # build component
```

## Setting up CI with automatic semantic-release versioning

Generate CircleCI API token and run:

```sh
$ npx semantic-release-cli setup --ask-for-passwords`
```

You will need to provide credentials for github and npm.

## Code organization and development

- `index.ts` contains the logic to communicate with the host embedding your renderer. You probably will _never_ need to update that file.
- template registry configuration is located in `src/templates/index.tsx`
- templates are located in `src/templates` folder. You can add as many template as you want and structure the code the way you want
- documents samples contains fake data to test the templates you build. You can create a typescript interface to make sure that your template uses the correct expected document
  - create a type describing the kind of document you expect to render (for instance check `CustomTemplateCertificate` in `src/sample.tsx`)
  - create a template consuming that interface, using the `TemplateProps` helper from `@govtechsg/decentralized-renderer-react-components (for instance check the template in`src/templates/customTemplate/customTemplate.tsx`)
- shared components are located in `src/core` folder. For instance you can find a watermark example that will be displayed when printing the document
- feel free to remove whatever you dont need

## Features

- [**React**](http://reactjs.org/) - A JavaScript library for building user interfaces.
- [**Webpack**](https://webpack.js.org/) - Component bundler.
- [**React testing library**](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices.
- [**Emotion**](https://emotion.sh/) - Library designed for writing css styles with JavaScript.
- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
- [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript superset, providing optional static typing
- [**Circle CI**](https://circleci.com/) - Automate tests and linting for every push or pull request.
- [**Storybook**](https://storybook.js.org/) - Tool for developing UI components in isolation with documentation.
- [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release/) - Fully automated version management and package publishing.
- [**Debug**](https://github.com/visionmedia/debug) - JS debugging utility that works both in node.js and browsers.

## Changing stuff

### Removing Emotion

- Uninstall npm packages

```sh
$ npm uninstall @emotion/core @emotion/styled @emotion/babel-preset-css-prop
```

- Remove `@emotion/babel-preset-css-prop` from Babel presets (configuration is made in package.json file)
- Remove `@emotion/core` from Typescript configuration (in tsconfig.json file)
- Remove `.storybook/webpack.config.js` (file created only for emotion css property support in storybook)

## License

GPL-3.0
