import path from 'path'
import { AxeConfig } from '@storybook/addon-storyshots-puppeteer'

const a11yConfig: Partial<AxeConfig> = {
  storybookUrl: `file://${path.resolve(__dirname, '../../storybook-static')}`
}

export default a11yConfig
