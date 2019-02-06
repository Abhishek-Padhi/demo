var Login=require('./Login Locators');
var test=require('/Users/mindfire/Desktop/ProtractorNew/Test Cases/Util.js');
describe("Checking the login function",function(){

    it("Testing the function",function(){
    browser.get("https://www.airasia.com/booking/home/en/gb");
    browser.ignoreSynchronization=true;
    test.waitClick(Login.select);
    browser.sleep(3000);
    Login.email.sendKeys("abhishekpadhidps@gmail.com");
    Login.password.sendKeys("Heyman123#");
    Login.loginButton.click();
    
});

});



