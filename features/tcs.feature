Feature: To Validate TCS Website

    Scenario: As a user, I can navigate different pages of TCS

        Given I am on the TCS Home page with "https://www.tcs.com"
        When I click on Cookie pop ups
        Then I should see logo at TCS landing