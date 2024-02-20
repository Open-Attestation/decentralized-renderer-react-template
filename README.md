# React Template

This is a React boilerplate to create the decentralize renderer.

## Installation

The easiest way to install the React template for the decentralized renderer is through GitHub: 

- In the [repository page](https://github.com/Open-Attestation/decentralized-renderer-react-template), click `Use this template`.

Alternatively, you can also download or `git clone` this repository:

```sh
$ git clone https://github.com/Open-Attestation/decentralized-renderer-react-template.git my-module
$ cd my-module
$ rm -rf .git
$ npm install
```

Be sure to edit the following files according to your module information:

- `package.json` (module name and version)
- `README.md`
- `LICENSE`
- Add your own template (in the `src/templates` folder) and configure the template registry (in the `src/templates/index.tsx` file).

## Commands

The following shows a list of commands for development tasks:

```sh
$ npm run storybook # open storybook and start editing your components
$ npm run storybook:build # generate docs
$ npm run test:watch # run tests with Jest
$ npm run test:coverage # run tests with coverage
$ npm run integration # run integration test with testcafe
$ npm run lint # lint code
$ npm run build # build component
$ npm run example:application # start embedded application
```

## Code organization and development

- The `index.ts` file contains the logic to communicate with the host embedding your renderer. You might not need to update this file.
- The template registry configuration is located in the `src/templates/index.tsx` file.
- Templates are located in the `src/templates` folder. You can add as many templates as required and structure the code accordingly.
- Document samples contain fake data to test the templates you build. You can create a TypeScript interface to make sure that your template uses the correct expected document:
  - Create a type describing the kind of document you expect to render (For instance, check `CustomTemplateCertificate` in `src/sample.tsx`).
  - Create a template consuming that interface, using the `TemplateProps` helper from `@govtechsg/decentralized-renderer-react-components` (For instance, check the template in the `src/templates/customTemplate/customTemplate.tsx` file).
- Shared components are located in the `src/core` folder. For instance, you can find a watermark example that will display while printing the document.
- Examples for adding a watermark and QR code are located in the `examples/template` folder.
- You can remove anything your project won't use.

## Testing the templates in an integrated environment

This template provides a simple application that is able to render documents built for the current renderer. 

To use it, follow the steps below:

1. Open the `application/index.tsx` file and edit the `documents` property of the `App` component depending on your needs.

    Provide any document that is available locally, whether it's a JavaScript, JSON, or TypeScript document.

2. Start your renderer using the command below: 
```bash
npm run dev
```

3. Start the local application using the command below:
 
 ```bash
 npm run example:application
 ```

4. Visit `http://localhost:3010/` in browser. 

    The configured documents in Step 1 should display.

## Testing the templates in vanilla HTML

1. Start your renderer using the command below: 

```bash
npm run dev
```

2. Start the local HTML using the command below: 

```bash
npm run example:html
```

3. Visit `http://localhost:8080/` in browser. 

    A button for rendering the document should display. Click the button to start rendering.

## End-to-end and visualization test

This repository has been configured to run end-to-end tests using `Testcafe`. Visualization test is also configured through `Percy` and the tests run through `Testcafe`.

To set up `Percy`, you will need a token on Percy's dashboard. For local development, type `export PERCY_TOKEN=<PERCY_TOKEN>` before running `npm run integration`.
  

## Features
- [**Babel**](https://babeljs.io/) - With this tool, you can write next-generation JavaScript.
- [**Debug**](https://github.com/visionmedia/debug) - A JS debugging utility that works in both node.js and browsers
- [**Emotion**](https://emotion.sh/) - A library designed for writing CSS with JavaScript
- [**ESLint**](http://eslint.org/) - With this tool, you write quality code.
- [**Jest**](https://facebook.github.io/jest) - A JavaScript testing framework used by Facebook
- [**Percy**](http://percy.io/) - A visualization testing tool
- [**Prettier**](https://prettier.io/) - It enforces a consistent style by parsing your code and re-printing it.
- [**React**](http://reactjs.org/) - A JavaScript library for building user interfaces
- [**React testing library**](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices
- [**TestCafe**](https://devexpress.github.io/testcafe/) - A node.js tool to automate end-to-end web testing
- [**TypeScript**](https://www.typescriptlang.org/) - A JavaScript superset that provides optional static typing
- [**Storybook**](https://storybook.js.org/) - A tool for developing UI components in isolation with documentation
- [**Webpack**](https://webpack.js.org/) - A component bundler


## Uninstallation

### Removing emotion

To uninstall `npm` packages with emotions, use the command below:

```sh
$ npm uninstall @emotion/core @emotion/styled @emotion/babel-preset-css-prop
```

- The uninstallation process will remove `@emotion/babel-preset-css-prop` from Babel presets (configuration is made in the `package.json` file).
- It will remove `@emotion/core` from TypeScript configuration (in the `tsconfig.json` file).
- It will also remove `.storybook/webpack.config.js` (a file created only for emotion CSS property support in storybook).

### Removing examples

To uninstall `npm` packages with examples, use the command below:

```sh
$ npm uninstall qrcode.react @types/qrcode.react
```

- The uninstallation process will remove the `examples` folder completely.
- It will remove line 5 with the `../example` context from `.storybook/config.js`, so that the storybook won't look for example files.

## License

The React template for the decentralized renderer is under the [Apache license, version 2.0](https://www.apache.org/licenses/LICENSE-2.0).
