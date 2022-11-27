@frontend @core @visual-regression @landing-page
Feature: Landing page visual regression testing
The landing page should be tested for visual regressions.
@aa
Scenario: Visual check the landing page "Demo Landing Page" full page
  Given I am on "/demo-landing-page"
  #Then visual test "Home" on "Duck Duck Go"
  # When I capture the page using applitools and compare to test "Demo Landing Page"
  #   | command      | value                    |
  #   | strict       |                          |
  #   | layoutRegion | .rpl-news-listing__items |
  #   | ignoreRegion | .rpl-updated-date        |
  # Then I should see no visual changes in applitools
  # And I close applitools eyes

# Scenario Outline: Visual check the demo landing page "<page title>" main region
#   Given I am on "<url>"
#   When I capture the region using applitools and compare to test "<page title>"
#     | command      | value             |
#     | region       | .rpl-page         |
#     | strict       |                   |
#     | ignoreRegion | .rpl-site-header  |
#     | ignoreRegion | .rpl-updated-date |
#   Then I should see no visual changes in applitools
#   And I close applitools eyes

# Examples:
#   | url                                                | page title                                            |
#   | /accessibility-demo                                | Accessibility - demo                                  |
#   | /disclaimer-demo                                   | Disclaimer - demo                                     |
#   | /copyright-demo                                    | Copyright - demo                                      |
#   | /working-cms-demo                                  | Working in the CMS - demo                             |
#   | /many-talents-one-vce-demo                         | Many Talents One VCE - demo                           |
#   | /find-connect-shape-your-victorian-government-demo | Find, connect, shape your Victorian Government - demo |
