const { Given, When, Then } = require('@cucumber/cucumber');

const tcshomePage = require('../pageobjects/tcs.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    tcshome: tcshomePage
}



Given(/^I am on the TCS Home page with "([^"]*)"$/, (urllink) => {
	tcshomePage.launchApplication(urllink)
});


When(/^I click on Cookie pop ups$/, async() => {
    
    await tcshomePage.declineCookie()
});


Then(/^I should see logo at TCS landing$/, async() => {
    await tcshomePage.TCSLogo()
});