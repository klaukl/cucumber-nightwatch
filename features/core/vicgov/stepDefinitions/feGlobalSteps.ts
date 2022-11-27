// const header = client.page.core.components.header.pageObjects.feHeaderPO();
// const main = client.page.core.components._common.pageObjects.feMainPO();
// const footer = client.page.core.components.footer.pageObjects.feFooterPO();
// const assert = require('assert');
// const project = require('@/utils/project');
// const chalk = require('chalk');

import { Given } from '@cucumber/cucumber'
import World from '../../../support/NightwatchWorld'
// import { beContentRatingPage } from '../pageObjects/beContentRatingPO'

Given(
  'I am on {string}',
  { timeout: 3 * 60000 },
  function (this: World, pathname: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const cachebuster = true
    return this.browser!.feRelativeURL(pathname, cachebuster)
  }
)

Given('I am on url {string}', function (this: World, pathname: string) {
  // Write code here that turns the phrase above into concrete actions
  return this.browser!.url(pathname)
})

// Given(
//   'I am on the backend page {string}',
//   { timeout: 3 * 60000 },
//   function (this: World, url: string) {
//     return this.browser!.beRelativeURL(url)
//   }
// )
