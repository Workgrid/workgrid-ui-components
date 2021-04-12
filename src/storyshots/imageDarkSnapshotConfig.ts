import imageSnapshotConfig from './imageSnapshotConfig'
import { Page } from 'puppeteer'
import { ImageSnapshotConfig } from '@storybook/addon-storyshots-puppeteer/dist/config'

const imageDarkSnapshotConfig: Partial<ImageSnapshotConfig> = {
  ...imageSnapshotConfig,
  beforeScreenshot: async (page: Page) => {
    await page.evaluate(() => document.querySelector('html')?.classList.toggle('dark'))
  }
}

export default imageDarkSnapshotConfig
