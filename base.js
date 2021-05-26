const {Builder, By, until} = require('selenium-webdriver');
//var driver = new Builder().forBrowser("chrome").build();
//const base = require ('assert/strict');
class base{
    constructor(){}
    // selectDropdown(element,value){
    //     driver.get(element).select(value)
    // }
    // checkDisplayMessage(element, value){
    //     //cy.get(element).should('have.text',value)
    //     driver.get(element).should('have.text',value)
    // }
    checkUploadFile(){
        
    }
    clickButton(element){
        cy.get(element).click()
    }

    findElementByXpath(xpath, timeout) {
        const el = driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
        return driver.wait(until.elementIsVisible(el), timeout);
      }
    
}
//export default base
module.exports= base