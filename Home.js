const { Builder, By, until } = require('selenium-webdriver');

const Page = require('../TC2/Page');
const account = require('../TC2/account.json');
const { Driver } = require('selenium-webdriver/chrome');
var assert = require('assert');
// var infor='{
// "xpath_product":[
//     {"  //*[@id='homefeatured']/li[1]/div/div[1]/div/a[1]/img "}, 
//     {"  //*[@id='homefeatured']/li[2]/div/div[1]/div/a[1]/img "},
//     {" //*[@id='homefeatured']/li[3]/div/div[1]/div/a[1]/img " },
//     {"  //*[@id='homefeatured']/li[4]/div/div[1]/div/a[1]/img "},
//     { "  //*[@id='homefeatured']/li[5]/div/div[1]/div/a[1]/img "} ,
//     {"  //*[@id='homefeatured']/li[6]/div/div[1]/div/a[1]/img "} ,
//     {"  //*[@id='homefeatured']/li[7]/div/div[1]/div/a[1]/img "} ,  
// ]}';
//var obj = JSON.parse(infor);
describe('Final Project', async function () {
    describe('#checkIndex negative()', async function () {
        //var driver = new Builder().forBrowser("chrome").build();
        var page = new Page()
        ////////////TC1//////////////////////////////
        // it ('Create Account Error', async function () { 
        //     await page.getweb(account.URLweb);
        //     await page.click(account.btn_signin);
        //     await page.senKey(account.box_emailcreate,account.invalidemail);
        //     await page.click(account.btn_creatacc);
        //     await page.checktext(account.mess_createacc_error);
        // })
        // /////////////TC2////////////////////////
        // it('Create Account Sucessful', async function(){
        //     await page.getweb(account.URLweb);
        //     await page.click(account.btn_signin);
        //     await page.senKey(account.box_emaillogin, account.email);
        //     await page.click(account.btn_creatacc);
        //     ////////need to create a new acc to verify message/////
        //})

        ////////////////TC3////////////////////////////
        // it ('Newsletter', async function(){
        //     await page.getweb(account.URLweb);
        //     // await page.click(account.btn_signin);
        //     // await page.senKey(account.box_emaillogin, account.email);
        //     // await page.senKey(account.box_password, account.password);
        //     // await page.click(account.btn_submitlogin);
        //     await page.senKey(account.box_newsletter, account.email);
        //     await page.click(account.btn_newsletter);
        //     await page.checktext(account.mess_alert_danger);
        // })

        ///////////////////////TC4////////////////////////////////
        // it ('Contact Us', async function(){
        //     await page.getweb(account.URLweb);
        //     await page.click(account.btn_contactus);
        //     await page.click(account.btn_contact_subject);
        //     await page.click(account.btn_contact_Customer);
        //     await page.senKey(account.box_emaillogin, account.email);
        //     await page.senKey(account.box_contact_order, account.oder_reference);
        //     //await page.click(account.btn_fileUpload);
        //     await page.uploadFile(account.btn_contact_fileUpload, account.link_upFile);
        //     await page.senKey(account.box_contact_message, "Test Selenium");
        //     await page.click(account.btn_contact_submitmess);
        //     await page.checkmessage(account.box_contact_sucess, account.expect_mess_contact);
        // })

        ////////////////////TC5/////////////////////////////////
        // it(('Check Search'), async function(){

        //     await page.getweb(account.URLweb);
        //     await page.senKey(account.box_Search, "Test Selenium");
        //     await page.check_mess(account.box_Search,account.check_text);
        //     await page.check_Search(account.box_Search);
        //     await page.closeweb();
        // })

        /////////////////TC6-7//////////////////////////////////
        it(('Search'), async function(){
            await page.getweb(account.URLweb);
            await page.senKey(account.box_Search, "Dress");
            await page.await(5000);
            await page.checkSearch();
            await page.searchWrong();

            //await page.closeweb();
        })

        //////////////TC8/////////////////////////////////////
        // it('Buy Product', async function () {

        //     await page.getweb(account.URLweb);

        //     await page.login(account.btn_signin,account.box_emaillogin,account.email,account.box_password,account.password,account.btn_submitlogin,account.btn_homepage);

        //     await page.click(account.xpath_product[0]);
        //     await page.click(account.btn_add_to_cart);
        //     await page.click_css(account.btn_continue_shopping);
        //     await page.click(account.btn_quality_plus);
        //     await page.click(account.btn_add_to_cart);

        //     await page.click_css(account.btn_checkout);
        //     await page.checkprice(account.box_total_price);
        //     await page.click(account.btn_checkout_sumary);
        //     await page.click(account.btn_checkout_adress);
        //     await page.click(account.check_box);
        //     await page.click(account.btn_checkout_ship);
        //     await page.click(account.box_pay_by_check);
        //     await page.click(account.btn_checkout_final); 
        //     await page.check_buy_sucess(account.box_mess_sucess, account.mess_order_sucess);
        //     await page.closeweb();
        // })


        ///////////////////////TC9///////////////////////////////
        // it('Buy Product Edit Information', async function(){
        //     await page.getweb(account.URLweb);
        //     await page.login(account.btn_signin,account.box_emaillogin,account.email,account.box_password,account.password,account.btn_submitlogin,account.btn_homepage);  
        //     await page.checkEl_Addcart();
        //     await page.getTextFunc();
        //     await page.click(account.btn_checkout_sumary);
        //     await page.click(account.btn_checkout_adress);
        //     await page.click(account.btn_checkout_ship);
        //     await page.click(account.btn_close_alert);
        //     await page.click(account.check_box);
        //     await page.click(account.btn_checkout_ship);
        //     await page.click(account.box_pay_by_check);
        //     await page.click(account.btn_checkout_final);
        //     await page.check_buy_sucess(account.box_mess_sucess, account.mess_order_sucess);
        // })

        ///////////////////TC10////////////////////////////////////
        // it('Buy sale', async function(){
        //     await page.getweb(account.URLweb);
        //     await page.login(account.btn_signin,account.box_emaillogin,account.email,account.box_password,account.password,account.btn_submitlogin,account.btn_homepage);
        //     await page.FindSale();
        //     await page.closeweb();
            
        // })
        ////////////////////TC11///////////////////////////////////

        // it('View Large', async function(){
        //     await page.getweb(account.URLweb);
        //     await page.ViewLagre();
        //     await page.closeweb();
        // })


        ///////////////////TC12////////////////////////////////////
        // it('Share to TWitter', async function(){
        //     await page.getweb(account.URLweb);
        //     var count = Math.floor(Math.random() * 7);
        //     await page.click(account.product[count].xpath);
        //     await page.switchWindows();

        //     await page.senKey(account.box_signin_tweet_email,account.email);
        //     await page.senKey(account.box_signin_tweet_pass,account.password);
        //     await page.click(account.btn_login_tweet);
        //     await page.click(account.btn_tweet);
            
        // })

        ///////////////////////TC14//////////////////////////
        // it('Send to friend', async function(){
        //     await page.getweb(account.URLweb);
        //     var count = Math.floor(Math.random() * 7);
        //     await page.click(account.product[count].xpath);
        //     await page.click(account.btn_send_email);
        //     //await page.switchFrame();
        //     await page.senKey(account.box_friend_name,account.invalidemail);
        //     await page.senKey(account.box_friend_mail,account.email);
        //     //await page.click(account.btn_send);
        //     await page.switchAlert();
        //     // var Text= page.getTextEl(account.box_sendmail);
        //     // console.log('----------'+Text);
        //     // assert.strictEqual(Text,account.mess_sendmail_sucess);

        // })
    });
});