import initStoryshots from '@storybook/addon-storyshots'
import { axeTest } from '@storybook/addon-storyshots-puppeteer'
import a11yConfig from './a11yConfig'

initStoryshots({
  suite: 'A11y storyshots',
  test: axeTest(a11yConfig)
})
