import { DataTable, Given, When, Then } from '@cucumber/cucumber'
import World from '../../../support/NightwatchWorld'

import { Eyes, Target, MatchLevel } from '@applitools/eyes-nightwatch'

// When(
//   'I capture the "(page|region)" using applitools and compare to test "(.*)"',
//   { timeout: 1 * 180000 },
//   async function (this: World, client: string) {
//   //  await this.browser!.eyesOpen(client, testname);
//   //   // browser.eyesOpen(client, testname);

//     await this.browser!.eyesOpen(client, 'test123')
//         .eyesCheck(Target.window().fully())
//         .eyesClose()
//         .end();

//   }
// )

When(
  'I capture the page using applitools and compare to test {string}',
  { timeout: 1 * 180000 },
  async function (this: World, client: string) {
    await this.browser!.eyesOpen(client, 'test123')
      .eyesCheck(Target.window().fully())
      .eyesClose()
      .end()
  }
)

// When(/^I capture the (page|region) using applitools and compare to test "(.*)"$/, { timeout: 1 * 180000 }, async function (pageOrRegion, testname, dataTable) {
//   let data = dataTable.rows();
//   let settings;
//   switch (pageOrRegion) {
//     case 'page':
//       settings = Target.window().fully();
//       break;
//     default:
//       settings = Target;
//   }
//   console.log(data);

//   for (let index = 0; index < data.length; index++) {
//     const command = data[index][0];
//     const commandValue = data[index][1] === 'true' ? true : data[index][1];
//     // TODO: our own configs need to be handled before this.
//     // if it's SDP configs do something
//     // else do below:
//     settings = settings[command](commandValue);
//   }

//   console.log(settings);
//   this.worldEyesSettings = settings;

//   client.eyesOpen(client, testname);

//   return client;
// });

// Then(/^I should see no visual changes in applitools$/, { timeout: 1 * 180000 }, async function () {
//   await client
//     .eyesCheck(this.worldEyesSettings);

//   return client;
// });

// Then(/^I close applitools eyes$/, { timeout: 1 * 180000 }, async () => {
//   return client.eyesClose();
// });

// // Below can be removed?
// // Then(/^I check current page using applitools eyes$/, { timeout: 1 * 180000 }, async (dataTable) => {
// //   let data = dataTable.rows();
// //   let settings = Target.window();
// //   console.log(data);

// //   for (let index = 0; index < data.length; index++) {
// //     const command = data[index][0];
// //     const commandValue = data[index][1] === 'true' ? true : data[index][1];
// //     // TODO: our own configs need to be handled before this.
// //     // if it's SDP configs do something
// //     // else do below:
// //     settings = settings[command](commandValue);
// //   }

// //   return client
// //     .eyesCheck(settings);
// // });
