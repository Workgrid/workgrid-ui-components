import initStoryshots from '@storybook/addon-storyshots'
import { devices, Page } from 'puppeteer'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import imageDarkSnapshotConfig from './imageDarkSnapshotConfig'

initStoryshots({
  suite: `Image storyshots: Medium Responsive (Dark)`,
  test: imageSnapshot({
    ...imageDarkSnapshotConfig,
    customizePage: (page: Page) => page.emulate(devices['iPad Mini'])
  })
})
