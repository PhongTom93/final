const {Builder, By, Key, util, until} = require('selenium-webdriver');

let invalidemail = "abc123",
    email = "testlqa.ppt@gmail.com",
    password = "lqa@12345",
    ULRweb = "http://automationpractice.com/index.php",
    ULRgmail = "https://mail.google.com/mail/u/0/#inbox";

var driver = new Builder().forBrowser("chrome").build();

async function getweb(ULR){
    await driver.get(ULR);
    //await driver.sleep(5000);
}

async function click(xpath){
    let button = await driver.findElement(By.xpath(xpath));
    await button.click();
   // await driver.sleep(5000);
}

async function sendKey(xpath,key){
    //await driver.sleep(5000);
    let text = await driver.findElement(By.xpath(xpath));
    await text.sendKeys(key);
    //await driver.sleep(5000);
}
///////////////TC1/////////////////////////
// async function TC1(){
//     await getweb(ULRweb);
//     await click("//*[@id='header']/div[2]/div/div/nav/div[1]/a");
//     await sendKey("//*[@id='email_create']",invalidemail);
//     await click("//*[@id='SubmitCreate']");
//     await driver.findElement(By.linkText("This email address is already registered."));
// }
// TC1();

///////////////TC2///////////////////////
//  async function TC2(){
    
//     await getweb(ULRweb);
//     // let login = driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a"));
//     // await login.click();
//     await click("//*[@id='header']/div[2]/div/div/nav/div[1]/a");
//     // let Email = await driver.findElement(By.xpath("//*[@id='email_create']"));
//     // await Email.sendKeys(email);
//     await sendKey("//*[@id='email_create']",email);
//     // let Create = driver.findElement(By.css("#SubmitCreate"));
//     // await Create.click();
//     await click("//*[@id='SubmitCreate']");
//     //await driver.sleep(5000);
//     // let Sex = driver.findElement(By.css("#id_gender2"));
//     // await Sex.click();
//     await driver.sleep(5000);
//     await click("//*[@id='id_gender2']");
//     // let firstname = driver.findElement(By.xpath("//*[@id='customer_firstname']"));
//     // await firstname.sendKeys("LQA");
//     await sendKey("//*[@id='customer_firstname']","LQA");
//     // let lastname = (await driver).findElement(By.xpath("//*[@id='customer_lastname']"));
//     // await lastname.sendKeys("TEST");
//     await sendKey("//*[@id='customer_lastname']","TEST");
//     // let email = (await driver).findElement(By.xpath("//*[@id='email']"));
//     // await email.sendKeys(email);
//     //click("//*[@id='email']");
//     await sendKey("//*[@id='passwd']",password);
//     await sendKey("//*[@id='days']", "23");
//     await sendKey("//*[@id='months']","November");
//     await sendKey("//*[@id='years']", "1993");
//     await sendKey("//*[@id='company']","LQA");
//     await sendKey("//*[@id='address1']","888 N" );
//     await sendKey("//*[@id='address2']","MD Complex");
//     await sendKey("//*[@id='city']","Alameda");
//     await sendKey("//*[@id='id_state']","California");
//     await sendKey("//*[@id='postcode']","94501"); 
//     await sendKey("//*[@id='phone']","510.208.9770");
//     await sendKey("//*[@id='alias']", "777 N, Alameda St");
//     await click("//*[@id='submitAccount']");
// }
// TC2();

async function TC3(){

        await getweb(ULRweb);
        sendKey("//*[@id='newsletter-input']",email);
        await click("//*[@id='newsletter_block_left']/div/form/div/button");

        await driver.findElement(By.linkText("This email address is already registered."));

        //await getweb(ULRgmail);
        // await driver.wait(until.alertIsPresent());
}
TC3();
it(

)