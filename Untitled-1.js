const {Builder, By ,Key, until} = require('selenium-webdriver');
var driver = new Builder().forBrowser("chrome").build();
async function example(){
await driver.get("http://automationpractice.com/index.php");
let keys = await driver.findElement(By.xpath("//*[@id='search_query_top']"));
await keys.sendKeys("Test Selenium");
let text= await (await driver.findElement(By.xpath("//*[@id='search_query_top']"))).getAttribute("value");
console.log(text);
}
example();