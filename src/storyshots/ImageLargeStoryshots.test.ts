import initStoryshots from '@storybook/addon-storyshots'
import { devices, Page } from 'puppeteer'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'

initStoryshots({
  suite: `Image storyshots: Large Responsive`,
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../../storybook-static')}`,
    customizePage: (page: Page) => page.emulate(devices['iPad Pro'])
  })
})
