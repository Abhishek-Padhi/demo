//declares the EC variable for using in expected conditions
var EC = protractor.ExpectedConditions;

'use strict';

var Util = function() { 

   //function to wait for an element and click it

   this.waitClick = function(elem) { 

      browser.wait(EC.elementToBeClickable(elem), 20000).then(function()  {
 
         elem.click();
 
       })
   };


   //function to check if the element is visible and click it

   this.visibleclick = function(elem)  {

     elem.isDisplayed().then(function(isVisible) { 
            
         if(isVisible) { 
            elem.click();
         }
             else{
                 console.log('element not visible');
             }
       })
   };


   //function to wait for an element and send values to it

   this.waitSend = function(elem,value) { 

      browser.wait(EC.elementToBeClickable(elem), 20000).then(function()  {

         elem.click();

         elem.sendKeys(value);
 
       })
   };

//function to get the text from the element

   this.gettext = function(elem) { 
 
    elem.getText().then(function(text) { 

      console.log(text);

    })

   };


//function to match the element's value with a given value

   this.match = function(elem,value) { 

      if(expect(elem.getText()).toMatch(value))

      {

         console.log('matched')

      }

      else {

         console.log('not matched')
      
      }
   
   };
   //function to check whether the website has loaded

};

module.exports = new Util();
