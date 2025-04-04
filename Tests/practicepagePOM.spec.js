const {test,expect}=require('@playwright/test');
const {AutomationPage}=require('../pageObjects/automationPracticePage');
const exp = require('constants');
test('Automation Practice Page',async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   const practicePage=new AutomationPage(page);
   await practicePage.goToPage();
   await practicePage.selectRadioButton();
   await practicePage.selectCountry("India");
   await practicePage.selectDropdownOption("Option3");
   await practicePage.checkcheckBox();
   await practicePage.clickOpenWindow(context,expect);
   await practicePage.clickOpenTab(context,expect);
   await practicePage.dialogAlerts("Manoj");
   await practicePage.verifyTextboxVisibility(expect);
   await practicePage.mousehover();
   await practicePage.framePage();
});
