// import { Given, When, Then } from '@cucumber/cucumber'
// import { Element } from 'nightwatch';
// import World from '../../../support/NightwatchWorld'
// import { feContactUsPage } from '../pageObjects/feContactUsPO'

// Then('I verify the form label {string} is present on the contact us form', function (this: World, label: string) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const contactUs: feContactUsPage = this.browser!.page.feContactUsPO()

//   return contactUs.getText(`//form[@name="form-connect_with_us"]//label//span[contains(text(),"${label}")]`);
// });

// Then(/^I verify the Privacy checkbox is present on the contact us form$/, () => {
//   return page.useXpath()
//     .assert.elementPresent('@vic_gov_auContactPagePrivacyCheckbox');
// });

// Then(/^I verify the Submit button is present on the contact us form$/, () => {
//   return page.useXpath()
//     .assert.elementPresent('@vic_gov_auContactPageFieldSubmit');
// });

// Then(/^I select Making a payment from the What best describes your enquiry dropdown on the contact us form$/, () => {
//   return page.useXpath()
//     .waitForElementVisible('@vic_gov_auContactPageFieldEnqueryTypeDropdown')
//     .click('@vic_gov_auContactPageFieldEnqueryTypeDropdown')
//     .waitForElementVisible('@vic_gov_auContactPageFieldEnqueryTypeDropdownOption')
//     .click('@vic_gov_auContactPageFieldEnqueryTypeDropdownOption');
// });

// Then(/^I enter the following in the What best describes your enquiry text box as "(.*)" on the contact us form$/, (text) => {
//   return page.useXpath()
//     .setValue('@vic_gov_auContactPageFieldEnquiryDescriptionInput', text);
// });

// Then(/^I enter the following in the Full name text box as "(.*)" on the contact us form$/, (text) => {
//   return page.useXpath()
//     .setValue('@vic_gov_auContactPageFieldFullNameInput', text);
// });

// Then(/^I enter the following in the Email address text box as "(.*)" on the contact us form$/, (text) => {
//   return page.useXpath()
//     .setValue('@vic_gov_auContactPageFieldEmailAddressInput', text);
// });

// Then(/^I enter the following in the Contact number text box as "(.*)" on the contact us form$/, (text) => {
//   return page.useXpath()
//     .setValue('@vic_gov_auContactPageFieldContactNumberInput', text);
// });

// Then(/^I select the Privacy checkbox on the contact us form$/, () => {
//   return page.useXpath()
//     .click('@vic_gov_auContactPagePrivacyCheckboxInput');
// });

// Then(/^I select the Submit button on the contact us form$/, () => {
//   return page.useXpath()
//     .click('@vic_gov_auContactPageFieldSubmit');
// });

// Then(/^the following message will display "(.*)" on the contact us form$/, (text) => {
//   return page.useXpath()
//     .waitForElementVisible('@vic_gov_auContactPageSuccessMessage')
//     .assert.containsText('@vic_gov_auContactPageSuccessMessage', text);
// });
