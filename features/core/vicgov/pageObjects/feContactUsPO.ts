module.exports = {
  elements: {
    vic_gov_auContactPagePrivacyCheckbox: {
      selector:
        '//form[@name="form-connect_with_us"]//input[contains(@id, "privacy-statement")]',
      locateStrategy: 'xpath',
    },
    vic_gov_auContactPageFieldSubmit: {
      selector: '//form[@name="form-connect_with_us"]//button[@type="submit"]',
      locateStrategy: 'xpath',
    },
  },
}

import { PageObjectModel, EnhancedPageObject } from 'nightwatch'

const feContactUs: PageObjectModel = {
  elements: {
    vic_gov_auContactPagePrivacyCheckbox:
      '//label[contains(@for,"show-content-rating-value")]',
    vic_gov_auContactPageFieldSubmit:
      '//form[@name="form-connect_with_us"]//button[@type="submit"]',
    vic_gov_auContactPageFieldEnqueryTypeDropdown:
      '//form[@name="form-connect_with_us"]//div[contains(@class, "tide-webform-field--what-type-of-enquiry-do-you-have")]//div[contains(@class, "rpl-select__trigger")]',
    vic_gov_auContactPageFieldEnqueryTypeDropdownOption:
      '//form[@name="form-connect_with_us"]//div[@id="what-type-of-enquiry-do-you-have___making-a-payment"]',
    vic_gov_auContactPageFieldEnquiryDescriptionInput:
      '//form[@name="form-connect_with_us"]//textarea[@id="what-best-describes-your-enquiry"]',
    vic_gov_auContactPageFieldFullNameInput:
      '//form[@name="form-connect_with_us"]//input[@id="full-name"]',
    vic_gov_auContactPageFieldEmailAddressInput:
      '//form[@name="form-connect_with_us"]//input[@id="email-address"]',
    vic_gov_auContactPageFieldContactNumberInput:
      '//form[@name="form-connect_with_us"]//input[@id="contact-number"]',
    vic_gov_auContactPagePrivacyCheckboxInput:
      '//form[@name="form-connect_with_us"]//fieldset[contains(@class, "rpl-fieldset")][6]//label[@class="rpl-checkbox"]',
    vic_gov_auContactPageSuccessMessage:
      '//form[@name="form-connect_with_us"]//div[contains(@class, "rpl-form-alert--success")]//div[@class="rpl-form-alert__message"]',
  },
}

export default feContactUs
export type feContactUsPage = EnhancedPageObject<typeof feContactUs>
