class AutomationPage{
    constructor(page){
        this.page = page;
        this.radioButton= page.locator("//input[@value='radio2']")
        this.countryInput = page.getByPlaceholder("Type to Select Countries")
        this.dropDown = page.locator("#dropdown-class-example")
        this.checkBox = page.locator("#checkBoxOption2")
        this.openWindow= page.locator("#openwindow")
        this.openTab =page.locator("#opentab")
        this.nameInput = page.getByPlaceholder("Enter Your Name")
        this.confirmButton =page.getByRole('button',{name:'Confirm'})
        this.textBox = page.getByPlaceholder('Hide/Show Example');
        this.textBoxHide= page.locator("#hide-textbox");
        this.mouseHover =page.getByRole('button', { name: 'Mouse Hover' })
        this.mouseHover_top =page.locator("[href='#top']");
        this.iframeLocator =page.frameLocator("#courses-iframe")
        this.mentorship= this.iframeLocator.locator('a[href="mentorship"]').first()
        this.blinkingText= this.iframeLocator.locator(".blinkingText")

    }
// navigation
    async goToPage(){
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    }
//radio button
    async selectRadioButton(){
        await this.radioButton.click();
    }
//select country
    async selectCountry(country){
        await this.countryInput.click();
        await this.countryInput.pressSequentially(country);
      
    }
// dropdown option
    async selectDropdownOption(option){
        await this.dropDown.selectOption(option);
    }
//check box
    async checkcheckBox(){
        await this.checkBox.click();
    }
//open window
    async clickOpenWindow(context,expect){
        const[newWindow]= await Promise.all(
            [
                context.waitForEvent("page"),
                await this.openWindow.click()
            ]
        
        )
        await newWindow.waitForLoadState();
        await expect(newWindow.url()).toContain('qaclickacademy');
        await newWindow.close();
     
    }
// open tab
    async clickOpenTab(context,expect){
        const[newTab]= await Promise.all(
            [
                context.waitForEvent("page"),
                await this.openTab.click()
            ]
        
        )
        await newTab.waitForLoadState();
        await expect(newTab.url()).toContain('qaclickacademy');
        await newTab.close();
        
    }
//dialog box
    async dialogAlerts(name){
        await this.nameInput.fill(name);
        await this.page.on('dialog', dialog=>dialog.accept());
        await this.confirmButton.click();
    }
//verify text box
    async verifyTextboxVisibility(expect){
        await expect(this.textBox).toBeVisible();
        await this.textBoxHide.click();
        await expect(this.textBox).toBeHidden();
    }
//mousehover
    async mousehover(){
        await this.mouseHover.hover();
        await this.mouseHover_top.click();
    }
//frame page
    async framePage(){
        await this.mentorship.click();
        console.log(await this.blinkingText.textContent());
    }
}
module.exports={AutomationPage};
