var EC = protractor.ExpectedConditions;
var test= require('./Util.js');

'use strict';

describe("Testing the Feedback Functionality",function(){

    it("Testing the Feedback Button",function(){
    
    browser.get("https://www.airasia.com/booking/home/en/gb");
    browser.ignoreSynchronization=true;
    browser.sleep(5000);
    
  //  browser.driver.wait(function () {
    //    browser.wait(EC.visibilityOf(element.all(by.cssContainingtext('.personalization-feedback-button')).get(4)), 20000);
      //  elem.click();
        //return elem;

        test.waitClick(element(by.xpath('/html/body/div[6]')));
        
   
   /* var rating=element(by.css('div.nps-score','7'));
    var textbox=element(by.xpath('//*[@id="nps-modal"]/div/div/div[2]/textarea'));
    var st=element(by.className('btn-primary'));
    var message=element(by.css(".nps-modal-content h2"));
    

    

});

