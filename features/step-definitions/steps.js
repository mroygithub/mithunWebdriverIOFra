const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const allure = require('@wdio/allure-reporter').default;

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    allure.addDescription("User can able to launch the application Successfully")
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    allure.addDescription("User can able to login Successfully")

});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

