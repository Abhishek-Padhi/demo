
beforeEach(function(){
    browser.get("https://www.airasia.com/booking/home/en/gb");
    browser.sleep(5000);
    browser.manage().window().maximize();
    
    browser.ignoreSynchronization=true;
});

describe("Automating the AirAsia Website",function(){


it("Logging In",function(){

    element(by.css('.login .text-item')).click();
    element(by.id('username-input--login')).sendKeys('abhishekpadhidps@gmail.com');
    element(by.id('password-input--login')).sendKeys('Heyman123#');
    element(by.id('loginbutton')).click();
    browser.sleep(5000);
   
    

});
/* Testing the Flight Search Fumction Betweem Two Cities */
it("Testing the Search function",function(){
    var el=element(by.id('-origin-autocomplete-heatmap'));
    el.sendKeys("Bhubaneswar");

    el.sendKeys(protractor.Key.TAB);
    var el1=element(by.id("-destination-autocomplete-heatmap"));
    el1.sendKeys("Bengaluru");
    
    el1.sendKeys(protractor.Key.TAB);
    var el2=element(by.id("-depart-autocomplete-heatmap"));
    el2.sendKeys("05/02/2019");
    
    el2.sendKeys(protractor.Key.TAB);
    var el3=element(by.id("-return-autocomplete-heatmap"));
    el3.sendKeys("12/02/2019");
    
    var cf=element(by.className('calendar-button'));
    cf.click();
    browser.sleep(5000);
    var sr=element(by.id("flight-search-airasia-button-inner-button-select-flight-heatmap"));
    sr.click();
    browser.sleep(7000);
    /* Checking the individual and total prices */


    var pr=element(by.xpath('//*[@id="airasia-fare-calendar-div-calendar-date-0-1-heatmap"]/div/div[2]/div/label[2]/span[1]')).getText();
    var pr1=element(by.xpath('//*[@id="amount-desc"]')).getText();
    expect(parseInt(pr,10)).toEqual(parseInt(pr1,10));
    var pr2=element(by.xpath('//*[@id="airasia-fare-calendar-div-calendar-date-1-10-heatmap"]/div/div[2]/div/label[2]/span[1]')).getText();
    var pr3=element(by.xpath('//*[@id="low-amount-desc"]')).getText();
    expect(parseInt(pr2,10)).toEqual(parseInt(pr3,10));
     var total=element(by.xpath('/html/body/app-root/div/main/airasia-select/div/airasia-bottom-booking-summary/div/div[1]/div[2]/div[1]/div[2]')).getText();
    /* Checking if the total amount is correct */
     expect(parseInt(total,10)).toEqual(parseInt(pr,10)+parseInt(pr2,10));
    element(by.className('waves-effect waves-light')).click();
    browser.sleep(15000);

    /* Adding of extra value package */

    element(by.className('bundle-item-button')).click();
    var ext=element(by.xpath('//*[@id="airasia-value-pack-bundle-div-show-bundle-details-heatmap"]/div/div[2]/div/p/span')).getText();
    var net=element(by.xpath('/html/body/app-root/div/main/airasia-add-ons/div/airasia-bottom-booking-summary/div/div[1]/div[2]/div[1]/div[2]')).getText();
    expect(parseInt(net,10)).toEqual(parseInt(total,10)+parseInt(ext,10));
    element(by.id("addons-bottom-booking-summary-airasia-button-inner-button-booking-summary-heatmap")).click();
    browser.sleep(3000);

    /* Filling Out Details for the flight ticket */

    element(by.id("adult-0-given-name-heatmap-autocomplete-heatmap")).sendKeys('Abhishek');
    element(by.id("adult-0-sur-name-heatmap")).sendKeys('Padhi');
    element(by.className('input-field mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid')).click();

    element(by.className('mat-calendar-next-button mat-icon-button')).click();
    element(by.xpath('//*[@id="mat-datepicker-0"]/div/mat-multi-year-view/table/tbody/tr[2]/td[3]/div')).click();
    element(by.xpath('//*[@id="mat-datepicker-0"]/div/mat-year-view/table/tbody/tr[2]/td[3]/div')).click();
    element(by.xpath('//*[@id="mat-datepicker-0"]/div/mat-month-view/table/tbody/tr[3]/td[2]/div')).click();
    element(by.xpath('/html/body/app-root/div/main/airasia-passenger/content/section/div/guest-details/div/div/guest-adult/div/form/div/div/div[2]/div[2]/div/airasia-radio-button-simple/div/div/div/div[1]/label')).click();
    browser.sleep(5000);
    element(by.className('combo-input')).element(by.xpath('//*[@id="adult-0-nationality-heatmap"]/div[1]/span[3]')).click();
    browser.sleep(5000);





});

});