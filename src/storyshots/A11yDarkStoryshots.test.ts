import initStoryshots from '@storybook/addon-storyshots'
import { axeTest } from '@storybook/addon-storyshots-puppeteer'
import { Page } from 'puppeteer'
import a11yConfig from './a11yConfig'

initStoryshots({
  suite: 'A11y Dark storyshots',
  test: axeTest({
    ...a11yConfig,
    beforeAxeTest: async (page: Page) => {
      await page.evaluate(() => document.querySelector('html')?.classList.toggle('dark'))
    }
  })
})
