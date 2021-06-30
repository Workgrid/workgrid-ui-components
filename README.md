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

This project also uses [Cypress](https://docs.cypress.io/guides/component-testing/introduction) for component level testing.

```shell
yarn test:cypress # Runs Cypress in CI mode
yarn cypress open-ct # Opens Cypress in interactive mode
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
- For our application we strive to export entire "screens" as components. See "Screen Development" below

### Screen Development

Due to limitations in Ionic Framework we have a specific approach to developing "screen" components that will be shown side-by-side on large devices such as tablets, desktop apps, or web applications. One example is [`SNNotificationDetailScren`](./src/components/SNNotificationDetailScreen.tsx). These screens shall export two components, one named `Small` and one named `Large`. The screens could then be consumed as follows:

```jsx
import { CustomScreen } from '@workgrid/ui';
import Media from 'react-media';
import { IonPage, IonContent } from '@ionic/react'

export const AppScreen = () => {
  return (
    <Media queries={/* small screen */}>
      {matches =>
        return (<CustomScreen.Small />)
      }
    </Media>
    <Media queries={/* large scren */}>
      {matches => {
        return (
          <IonPage>
            <IonContent>
              <OtherCompoent />
              <CustomScreen.Large />
              <AnotherComponent />
            </IonContent>
          </IonPage>)
      }}
    </Media>
  )
}
```

The `Small` screen will have all the necessary Ionic components to support navigation and animation between screens.

```jsx
export const Small = () => {
  return (
    <IonPage>
      <IonHeader>
        <CustomScreenHeaderHere />
      </IonHeader>
      <IonContent>
        <CustomScreenContentHere />
      </IonContent>
    </IonPage>
  )
}
```

The `Large` screen will lack the Ionic components such as `IonPage`, `IonContent` and `IonHeader` that would otherwise be used in mobile screens.

```jsx
export const Large = () => {
  return (
    <>
      <CustomScreenHeaderHere />
      <CustomScreenContentHere />
    </>
  )
}
```

As shown above, the implementation is shared between `Small` and `Large` screens the only difference being that in one case we have wrapping `Ion*` components and in the other, we don't. The components themselves **should be designed so that they responsively support the needs of both large and small screens**.

#### Testing

Cypress component testing shall be done for both `Small` and `Large` screens. An example pattern for re-use in a test suite could be as follows:

```jsx
describe('CustomScreen', () => {
  const screenTests = () => {
    it('Use case to test', () => {
      // Test here
    })
  }

  describe('Small Screen Tests', () => {
    beforeEach(() => {
      mountIonApp(<CustomScreen.Small />)
    })

    screenTests()
  })

  describe('Large Screen Tests', () => {
    beforeEach(() => {
      mountIonApp(<CustomScreen.Large />)
    })

    screenTests()
  })
})
```

Storybook Stories for both the `Small` and `Large` screens shall be created in the same `.stories.tsx` file for the screen. For each story that is created, you must create one for both the `Small` and `Large` screens. An example pattern for re-use in a story is shown below:

```tsx
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IonPage, IonContent } from '@ionic/react'
import * as CustomScreen from './CustomScreen'
import { CustomScreenProps } from './CustomScreen'

export default {
  title: 'Screens/Custom Screen',
  component: CustomScreen.Small
} as Meta

const SmallTemplate: Story<CustomScreenProps> = args => <CustomScreen.Small {...args} />

// Since we're using Small / Large screens in the same story we can't use the component decorators so we wrap the large screen in the required elements here
const LargeTemplate: Story<CustomScreenProps> = args => (
  <IonPage>
    <IonContent>
      <CustomScreen.Large {...args} />
    </IonContent>
  </IonPage>
)

const UseCaseArgs = {
  /* arguments here */
}

export const SmallUseCase = SmallTemplate.bind({})

SmallUseCase.args = UseCaseArgs

export const LargeUseCase = LargeTemplate.bind({})

LargeUseCase.args = UseCaseArgs
```
