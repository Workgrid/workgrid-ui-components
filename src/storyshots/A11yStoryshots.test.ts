import initStoryshots from '@storybook/addon-storyshots'
import { axeTest } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'

initStoryshots({
  suite: 'A11y storyshots',
  test: axeTest({
    storybookUrl: `file://${path.resolve(__dirname, '../../storybook-static')}`
  })
})
