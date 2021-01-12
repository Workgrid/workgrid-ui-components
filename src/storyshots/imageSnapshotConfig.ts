import path from 'path'
import { DirectNavigationOptions } from 'puppeteer'
import { MatchImageSnapshotOptions } from 'jest-image-snapshot'
import { ImageSnapshotConfig } from '@storybook/addon-storyshots-puppeteer/dist/config'

const imageSnapshotConfig: Partial<ImageSnapshotConfig> = {
  storybookUrl: `file://${path.resolve(__dirname, '../../storybook-static')}`,
  getGotoOptions: (): DirectNavigationOptions => {
    return { waitUntil: 'networkidle0' }
  },
  getMatchOptions: (): MatchImageSnapshotOptions => {
    return {
      /* Setting to 1%  to allow for font rendering differences between platforms to be considered */
      failureThreshold: 1,
      failureThresholdType: 'percent'
    }
  }
}

export default imageSnapshotConfig
