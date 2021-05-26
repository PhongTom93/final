//import 'cypress-file-upload';
const { Builder, By, until, ElementNotInteractableException, ElementClickInterceptedException, WebElement } = require('selenium-webdriver');
const { alertIsPresent, elementTextContains } = require('selenium-webdriver/lib/until');
const base = require('../TC2/base');
// const Page = require ('assert');
// const  assert  = require('console');
var debug = require('debug');
var assert = require('assert');
const account = require('../TC2/account.json');
const { exception } = require('console');
class Page {
    constructor() {

        var driver = new Builder().forBrowser("chrome").build();

        this.getweb = async function (URL) {
            await driver.get(URL);
        };

        this.closeweb = async function () {
            (await driver).quit();
        };

        this.hidden = async function () {
            driver.manage().window().maximize();
        }

        this.click = async function (xpath) {
            let el = await this.findElementByXpath(xpath, 5000);
            await el.click();

        };


        this.click_css = async function (css) {
            let el = await this.findElementByCss(css, 10000)
            await el.click()
        };


        this.log = async function (xpath) {
            console.log(xpath);
        }
        this.await = async function (time_delay) {
            (await driver).sleep(time_delay);
        }

        this.senKey = async function (xpath, key) {
            let keys = await driver.findElement(By.xpath(xpath));
            await keys.sendKeys(key);
        };

        this.checkprice = async function (xpath) {
            let gettext = await driver.findElement(By.xpath(xpath)).getText();
            console.log(gettext);
            assert.equal(gettext, "$51.53");
        };

        this.check_mess = async function (xpath, check_text) {
            let text = await (await driver.findElement(By.xpath(xpath))).getAttribute("value");
            //console.log(text);
            assert.notStrictEqual(text, "Search");
        };

        this.check_Search = async function (xpath) {
            let clear = await (await driver.findElement(By.xpath(xpath))).clear();
            //console.log(clear);
            let check = await (await driver.findElement(By.xpath(xpath))).getAttribute("placeholder");
            //console.log(check);
            assert.equal(check, "Search");
        };

        this.check_buy_sucess = async function (xpath, mess_order_sucess) {
            let check_sucess = await driver.findElement(By.xpath(xpath)).getText();
            assert.equal(check_sucess, mess_order_sucess);
        };

        this.uploadFile = async function (xpath, link) {
            let uploadFile = driver.findElement(By.xpath(xpath));
            uploadFile.sendKeys(link);
        };

        this.findElementByXpath = function (xpath, timeout) {
            const el = driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
            return driver.wait(until.elementIsVisible(el), timeout);
        };

        this.findElementByCss = function (css, timeout) {
            const el = driver.wait(until.elementLocated(By.css(css)), timeout);
            return driver.wait(until.elementIsVisible(el), timeout);
        };
        this.scroll = function () {
            return driver.executeScript('window.scrollBy(0,500)');
        }
        this.login = async function (btn_signin, box_emaillogin, email, box_password, password, btn_submitlogin, btn_homepage) {
            await this.click(btn_signin);
            await this.senKey(box_emaillogin, email);
            await this.senKey(box_password, password);
            await this.click(btn_submitlogin);
            await this.click(btn_homepage);
        }

        this.getPrice = async () => {
            var priceArray = new Array(7);
            for (var i = 0; i < 7; i++) {
                var price = await (await driver.findElement(By.xpath(account.product[i].price)).getText());
                while (price.charAt(0)=='$') price=price.substr(1);
                //console.log(price);
                priceArray[i] = price;
                //console.log(priceArray[i]);
            }
            //console.log(priceArray);
            return priceArray;
            
        }

        this.TotalPrice = async () => {
            var TotalPriceArray = new Array(7);
            var showList = await this.getPrice();
            //console.log(showList);
            for (var j = 0; j < 7; j++) {
                //console.log(showList[j])
                let total = (showList[j] * 3).toFixed(2);
                //console.log(total);
                TotalPriceArray[j] = total;
                //console.log(TotalPriceArray[j]);
            }
            //console.log(TotalPriceArray);
            return TotalPriceArray()
        }

        this.checkEl_Addcart = async function(){
                for (var i=0;i<5;i++){
                    let count = Math.floor(Math.random() * 7);
                    await this.click(account.product[count].add_to_cart);
                    await this.await(3000);
                    await this.click(account.btn_continue_shopping);
                    await this.await(3000);
                }
                
            }

        this.getTextFunc =async function(){
            await this.click(account.btn_view_cart);
            var quantity = await driver.findElements(By.xpath(account.locator_quantity));
            //console.log(quantity);
            let quantity_cart = new Array();
            let i=0;
            for (let x of quantity){
                quantity_cart[i] = await x.getAttribute('value');  
                i++;

            }
            //console.log('--------'+quantity_cart);
            for (let j=0; j<quantity_cart.length; j++)
            {
                if(quantity_cart[j]==1){
                    quantity_cart[j]=3;
                    break;
                }
                break;
            }
            //console.log('--------'+quantity_cart);
            var deleteList_Array = new Array();
            let z=0;
            var deleteList = await driver.findElements(By.xpath(account.btn_delete));
            //console.log(deleteList);
            for(let y of deleteList){
                deleteList_Array[z]= await y.getAttribute('id');
                z++;
            }
            //console.log(deleteList_Array);
            let count = Math.floor(Math.random() * (deleteList_Array.length-1));
            let product_delete = "//*[@id='" + deleteList_Array[count] + "']";
            console.log(product_delete);
            await this.click(product_delete);
        }

        this.checkSearch = async function(){
            this.await(3000);
            //let search = await driver.findElements(By.xpath(account.box_search_result));
            await driver.wait(until.elementLocated(By.xpath(account.box_search_result)), 50000);
            let search = await driver.findElements(By.xpath(account.box_search_result));
            //console.log('-----'+search.length);
            
            let search_result = new Array();
            let i=0;
            for (let x of search){
                search_result[i] = await x.getText();  
                i++;  
            }
            console.log('------'+search_result)
            for (let j = 0; j < search_result.length; j++)
            {
                //console.log('------'+search_result[i]);
                search_result[j].includes("dress");
            }
            
            let count = Math.floor(Math.random() * (search.length-1));
            await search[count].click();   
            var verify_text= await (await driver).findElement(By.xpath(account.box_name_search)).getText();
            //console.log('-------'+verify_text);
            //console.log(count);
            //console.log('-------'+search_result[count]);
            search_result[count].includes(verify_text);
        }

        this.searchWrong = async function(){
            await this.senKey(account.box_Search,"dressss");
            await this.click(account.btn_submit_search);
            let mess= await (await this.findElementByXpath(account.box_warning_search)).getText();
            console.log(mess);
            assert.equal(account.mess_warning_search,mess);
        }


        this.DissmissAlert = async function (done) {
            const alert = driver.wait(until.alertIsPresent());
            return driver.wait(until.alertIsPresent());

        }

    }
}

module.exports = Page;
