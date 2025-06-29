import { expect } from '@playwright/test';
//import signUpdata from '../TestData/SignUpdata.json' assert { type: "json" };
// const signUpdata = JSON.parse(JSON.stringify(require("../TestData/SignUpdata.json")));
//import signUpdata from '../TestData/SignUpdata.json' assert { type: "json" };
const signUpdata = require("../TestData/SignUpdata.json");
const invalidsignUpdata = require("../TestData/InvalidSignUpdata.json");

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

  async InvalidCredentials(Username, Password) {
    await this.userName.fill(Username || '');
    await this.passWord.fill(Password || '');
  }


  async errorMessage(errorText) {

    await expect(this.errorMsg).toHaveText(errorText);
  }

  async mananAppURL(appPage) {
    this.page.once('dialog', async dialog => {
      await dialog.accept(); // Clicks OK
    });
    await expect(this.page).toHaveURL(appPage);
  }

  async mananFormURL() {
    await expect(this.page).toHaveURL(/.*\/app/);
  }

  async authSuccessfulPopUp() {
    const popup = this.page.locator('div.grid.gap-1');
    await popup.waitFor({ state: 'visible', timeout: 10000 }); // Wait up to 10s
    await expect(popup).toContainText('Authentication Successful');
  }

  async authSuccessfulPopUpMsg() {
    const popupMsg = this.page.locator('div.grid.gap-1');
    await popupMsg.waitFor({ state: 'visible', timeout: 10000 }); // Wait up to 10s
    await expect(popupMsg).toContainText('Welcome to MANAN Medical Assistant.');
  }

  async loginFailedPopUp(loginfailMessage) {
    const popupfailedMsg = this.page.locator('div.grid.gap-1');
    await popupfailedMsg.waitFor({ state: 'visible', timeout: 10000 }); // Wait up to 10s
    await expect(popupfailedMsg).toContainText(loginfailMessage);
    // const errorTitle = this.page.locator('div.text-sm.font-semibold');
    // const actualMessage = await errorTitle.textContent();

    // await expect(actualMessage?.trim()).toBe(expectedMessage);
  }

  async signupregfailedpopup() {
    const errorContainer = this.page.locator('div.grid.gap-1');
    await expect(errorContainer).toHaveText(/Registration Failed\s*Username already exists/);
    // await expect(this.page.locator('div.text-sm.font-semibold')).toHaveText(regfailmsg);
  }
  // async signuploginFailedPopUppwd(PexpectedMessage) {
  //   //const passwordMismatchError = page.getByText('Passwords do not match');
  //   const passwordMismatchError = this.page.locator('p', { hasText: 'Passwords do not match' });

  //   const actualMessage = await passwordMismatchError.textContent();

  //   await expect(actualMessage?.trim()).toBe(PexpectedMessage);
  // }
  async signuploginFailedPopUppwd(expectedMessage) {
  const passwordMismatchError = this.page.locator('p.text-sm.text-red-400');

  await expect(passwordMismatchError).toHaveText(expectedMessage);
}


  async loginFailedalertmessage(alertexpectedMessage) {
    const emailInput = this.page.locator('input[placeholder="Enter your email address"]');
    const message = await emailInput.evaluate(el => el.validationMessage);
    console.log('Validation message:', message);
    expect(message).toContain(alertexpectedMessage);
  }


  async loginFailedPopUpMsg() {
    const popupLoginFailedMsg = this.page.locator('div.grid.gap-1');
    await expect(popupMsg).toContainText('Incorrect password.');
  }

  async signupisEnable() {
    const signInTab = this.page.locator('[id="radix-\\:r27\\:-trigger-login"]');
    await expect(this.signUpTab).toBeEnabled();

  }
  async signUpClick() {
    await this.signUpTab.click();
  }
  async signinEnable() {
    await expect(this.signinTab).toBeEnabled();
  }

  async signUpformDetails(signUpUN, signUpEmail, signUpPwd, signUpConfirmPwd) {
    await this.usernameInput.fill(signUpUN);
    await this.emailInput.fill(signUpEmail);
    await this.createpwdInput.fill(signUpPwd);
    await this.confirmpwdInput.fill(signUpConfirmPwd);

  }

  async signUpformDetailsJson() {
    await this.usernameInput.fill(signUpdata.user);
    await this.emailInput.fill(signUpdata.email_id);
    await this.createpwdInput.fill(signUpdata.passwd);
    await this.confirmpwdInput.fill(signUpdata.confirmPass);
  }
  // async invalidsignUpDetailsJson() {
  //   await this.usernameInput.fill(invalidsignUpdata.user);
  //   await this.emailInput.fill(invalidsignUpdata.email_id);
  //   await this.createpwdInput.fill(invalidsignUpdata.passwd);
  //   await this.confirmpwdInput.fill(invalidsignUpdata.confirmPass);
  // }

  async fillInvalidSignUpForm(index) {
    const data = invalidsignUpdata[index];
    await this.usernameInput.fill(data.user || '');
    await this.emailInput.fill(data.email_id || '');
    await this.createpwdInput.fill(data.passwd || '');
    await this.confirmpwdInput.fill(data.confirmPass || '');
  }
  async signUpCreataccountClick() {
    await this.createAccountbtn.click();
  }
}
