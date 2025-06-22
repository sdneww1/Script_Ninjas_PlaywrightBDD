import { expect } from '@playwright/test';

export class SignInPage {

    constructor(page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Enter your username');
        this.passWord = page.getByPlaceholder('Enter your password');
        this.errorMsg = page.getByText('Please fill in all fields');
        this.signinTab = page.getByRole('tab', { name: 'Sign In' });
        this.signUpTab = page.getByRole('tab', { name: 'Sign Up' });
        this.usernameLabel = page.locator('label[for="register-username"]');
        this.usernameInput = page.getByPlaceholder('Choose a username');
        this.emailInput = page.getByPlaceholder('Enter your email address');
        this.createpwdInput = page.getByPlaceholder('Create a password');
        this.confirmpwdInput = page.getByPlaceholder('Confirm your password');
        this.createAccountbtn = page.getByRole('button', { name: 'Create Account' });

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

// <<<<<<< Shweta
//     // async validUNandPwd(UN,Pwd) {
//     //     await this.userName.fill(UN);
//     //     await this.passWord.fill(Pwd);
//     // }
    
//     async validUNandPwd() {
//          await this.userName.fill(process.env.EMAIL);
//           await this.passWord.fill(process.env.PASSWORD);
//     }
//     async mananAppURL(appPage) {
//         // this.page.once('dialog', async dialog => {
//         //     await dialog.accept(); // Clicks OK
//         // });
//         await expect(this.page).toHaveURL(appPage);
// =======
//     async authSuccessfulPopUpMsg()
//     {
//         const popupMsg = this.page.locator('div.grid.gap-1');
//         await expect(popupMsg).toContainText('Welcome to MANAN Medical Assistant.');
//     }

//     async loginFailedPopUp(expectedMessage)
//     {
//         // const popupLoginFailed = this.page.locator('div.grid gap-1');
//         // await expect(popupLoginFailed).toContainText(loginfailederror);

      
//         const errorTitle = this.page.locator('div.text-sm.font-semibold');
//        const actualMessage = await errorTitle.textContent();

// //await page.getByText('Please fill in all fields').textContent();
//   // Trim whitespace and compare
//   await expect(actualMessage?.trim()).toBe(expectedMessage);

// >>>>>>> Supriya
    }

    async loginFailedPopUpMsg()
    {
        const popupLoginFailedMsg = this.page.locator('div.grid.gap-1');
        await expect(popupMsg).toContainText('Incorrect password.');
    }

    async signupisEnable()
  {
const signInTab = this.page.locator('[id="radix-\\:r27\\:-trigger-login"]');
//const signUpTab = this.page.getByRole('tab', { name: 'Sign Up' });
await expect(this.signUpTab).toBeEnabled();
// await expect(signInTab).toHaveAttribute('aria-selected', 'true');
// await expect(signUpTab).toHaveAttribute('aria-selected', 'false');


  }
  async signUpClick()
  {
await this.signUpTab.click();
  }
//   async usernameVisibleSignup(){
    
// await expect(usernameLabel).toBeVisible();

//   }
async signinEnable()
{
  await expect(this.signinTab).toBeEnabled();
}

async signUpformDetails(signUpUN,signUpEmail,signUpPwd,signUpConfirmPwd)
{
 await this.usernameInput.fill(signUpUN);
  await this.emailInput.fill(signUpEmail);
  await this.createpwdInput.fill(signUpPwd);
  await this.confirmpwdInput.fill(signUpConfirmPwd);
  
  
}
async signUpCreataccountClick()
{
  await this.createAccountbtn.click();
}
}
//export{ SignInPage };
