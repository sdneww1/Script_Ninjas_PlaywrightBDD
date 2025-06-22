import { expect } from '@playwright/test';

export class SignInPage {

    constructor(page) {
        this.page = page;
        this.signINbtn0 = page.getByRole('button', { name: 'Sign In' }).nth(0);
        this.signINbtn1 = page.getByRole('button', { name: 'Sign In' }).first();
        this.userName = page.getByPlaceholder('Enter your username');
        this.passWord = page.getByPlaceholder('Enter your password');

    }

    // async NavigatetoUrl(url) {
    //     await this.page.goto(url);
    // }

    // async mananTitle(title) {
    //     await expect(this.page).toHaveTitle(title);
    // }

    async SignInbtnzero() {
        await this.signINbtn0.click();
    }

    async signInPopup() {
        await this.page.waitForSelector('div[role="dialog"]');
        // Check for welcome message
        const welcomeHeading = this.page.locator('h2:has-text("Welcome to MANAN")');
        await expect(welcomeHeading).toBeVisible();
    }
    async SignInbtnfirst() {
        await this.signINbtn1.click();
    }

    // async validUNandPwd(UN,Pwd) {
    //     await this.userName.fill(UN);
    //     await this.passWord.fill(Pwd);
    // }
    
    async validUNandPwd() {
         await this.userName.fill(process.env.EMAIL);
          await this.passWord.fill(process.env.PASSWORD);
    }
    async mananAppURL(appPage) {
        // this.page.once('dialog', async dialog => {
        //     await dialog.accept(); // Clicks OK
        // });
        await expect(this.page).toHaveURL(appPage);
    }
}
//export{ SignInPage };
