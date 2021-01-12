import initStoryshots from '@storybook/addon-storyshots'
import { devices, Page } from 'puppeteer'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import imageSnapshotConfig from './imageSnapshotConfig'

initStoryshots({
  suite: `Image storyshots: Medium Responsive`,
  test: imageSnapshot({
    ...imageSnapshotConfig,
    customizePage: (page: Page) => page.emulate(devices['iPad Mini'])
  })
})
