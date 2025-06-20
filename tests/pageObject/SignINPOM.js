import { expect } from '@playwright/test';

export class SignInPage {

    constructor(page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Enter your username');
        this.passWord = page.getByPlaceholder('Enter your password');
        this.errorMsg = page.getByText('Please fill in all fields');
    }
    
    async validUNandPwd() {
        await this.userName.fill(process.env.EMAIL);
        await this.passWord.fill(process.env.PASSWORD);
    }

    async InvalidCredentials(Username,Password) {
  await this.userName.fill(Username || '');
  await this.passWord.fill(Password || '');
}


    async errorMessage(errorText)
    {
    //    const errorText = await this.erro
    // rMsg.textContent();
    //    console.log(errorText); // Should print: Please fill in all fields
          await expect(this.errorMsg).toHaveText(errorText);

    }

    async mananAppURL(appPage) {
        this.page.once('dialog', async dialog => {
            await dialog.accept(); // Clicks OK
        });
        await expect(this.page).toHaveURL(appPage);
    }

    async mananFormURL(){
        await expect(this.page).toHaveURL(/.*\/app/);
    }

    async authSuccessfulPopUp()
    {
        const popup = this.page.locator('div.grid.gap-1');
        await expect(popup).toContainText('Authentication Successful');
    }

    async authSuccessfulPopUpMsg()
    {
        const popupMsg = this.page.locator('div.grid.gap-1');
        await expect(popupMsg).toContainText('Welcome to MANAN Medical Assistant.');
    }

    async loginFailedPopUp(expectedMessage)
    {
        // const popupLoginFailed = this.page.locator('div.grid gap-1');
        // await expect(popupLoginFailed).toContainText(loginfailederror);


        const errorTitle = this.page.locator('div.text-sm.font-semibold');
       const actualMessage = await errorTitle.textContent();

  // Trim whitespace and compare
  await expect(actualMessage?.trim()).toBe(expectedMessage);

    }

    async loginFailedPopUpMsg()
    {
        const popupLoginFailedMsg = this.page.locator('div.grid.gap-1');
        await expect(popupMsg).toContainText('Incorrect password.');
    }
}
//export{ SignInPage };
