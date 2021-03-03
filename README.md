# Workgrid UI Components

![](https://img.shields.io/npm/v/@workgrid/ui/latest)
![](https://img.shields.io/github/license/workgrid/workgrid-ui-components)
![](https://img.shields.io/badge/language-TypeScript-blue)

# What is Workgrid UI

Workgrid UI is a set of React UI components that wrap the [Ionic UI framework](https://ionicframework.com/docs/components) used to build the Workgrid app and can also be adopted to build Workgrid microapps.

# Installation & Usage

## Installation

You can install Workgrid UI using a package manager like [npm](https://docs.npmjs.com/cli/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).

```shell
yarn add @workgrid/ui @ionic/react @ionic/react-router styled-components
```

## Configuration

For the components to function correctly a set of CSS variables need to be defined to work correctly. Please see the [Ionic documentation](https://ionicframework.com/docs/intro/cdn#css) for details.

## Usage

```typescript jsx
import { Button } from '@workgrid/ui'

const MyCustomComponent = () => (
  <Button type="primary" onClick={() => {}}>
    My Button
  </Button>
)
```

A complete list of components can be found in our documentation [here](https://workgrid.github.io/workgrid-ui-components).

# Developing Locally

## Run Storybook

```shell
yarn storybook
```

## Run tests

This project makes use of [@storybook/addon-storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots) for accessibility and visual testing. In order for these tests to run you must build storybook.

```shell
yarn build-storybook
yarn test
```

## Build

```shell
yarn build
```

# Development Process

All code intended for production use must:

1. Be introduced as a pull request targeting the `main` branch.
2. All pull requests must have a reference to the internal change management ticket by including it in the pull request title or description (e.g. ETSWORK-####)
3. All code must be approved by at least two reviewers as well as any defined [code owners](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) in accordance with our internally documented code review guidelines
   1. At least one code reviewer should determine if the code change matches the intent of the change management ticket.
4. All required checks must pass before a pull request can be merged. These are automated through GitHub Actions. Required build checks include:
   1. All automated unit tests need to pass
   2. All automated integration tests need to pass
   3. A successful distributable (e.g. package, binary) can be built
   4. Code security scanning checks need to pass

## Contribution Guidelines

- Internationalization is out of scope for this library. All text that is displayed by a component must be provided via the API of the specific component
- We strive to align behavior to the platform that the user is using these components on
- We strive to implement the patterns and best practices documented here: [React Typescript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
