const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TcsHome extends Page {
    /**
     * define selectors using getter methods
     */
    get cookiePopupDecline () { return $("//button[@id='onetrust-reject-all-handler']") }
    get tCSLogo () { return $("(//img[@alt='TCS 50 Brand Logo'])[1]") }
    get btnSubmit () { return $('button[type="submit"]') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to validate TCS Logo
     */
     launchApplication (urllink) {
        return browser.url(urllink);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to decline cookie button
     */
     async declineCookie () {
        await (await this.cookiePopupDecline).click();
    }


     /**
     * a method to encapsule automation code to interact with the page
     * e.g. to validate TCS Logo
     */
      async TCSLogo () {
        await (await this.tCSLogo).click();
    }

    


    /**
     * overwrite specifc options to adapt it to page object
     */
     open () {
         return super.open('');
    }

   
}

module.exports = new TcsHome();