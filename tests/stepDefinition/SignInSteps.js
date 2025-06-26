
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Before, After, Given, When, Then } = createBdd(test);


When('User navigates to Sign in pop up window.', async ({ homePage }) => {
  await homePage.signInPopup();
});

When('the user clicks the Sign-In button on the Sign-In popup', async ({ homePage }) => {
  await homePage.SignInbtnPopupPage();
});

When('User enters valid Username and Password', async ({ signinPage }) => {
  await signinPage.validUNandPwd();  
});

When('User click on SignIn button in sign in pop up window', async ({ signinPage }) => {
  await signinPage.SignInbtnfirst();  
});  
      
Then('User should be redirected to Manan Form page', async ({ signinPage }) => {
  await signinPage.mananFormURL();
});

When('User enters invalid {string} and {string}', async ({ signinPage }, Username, Password) => {
  await signinPage.InvalidCredentials(Username,Password);
});

Then('User should get error message {string}', async ({ signinPage }, errorText) => {
 await signinPage.errorMessage(errorText);  
});

Then('User should be redirected to Manan Form page with Registration Successful Pop up', async ({ signinPage }) => {
 await signinPage.authSuccessfulPopUp();

});

Then('User should be redirected to Manan Form page with Welcome to MANAN Medical Assistant. Pop up Message', async ({ signinPage }) => { 
  await signinPage.authSuccessfulPopUpMsg();
});

Then('User should get pop up error message {string}', async ({ signinPage }, expectedMessage) => {
  await signinPage.loginFailedPopUp(expectedMessage);
});

When('The user is on the Sign In form with signup button enable', async ({ signinPage }) => {

  await signinPage.signupisEnable();
});


When('The user clicks on the Sign Up button', async ({ signinPage }) => {
    await signinPage.signUpClick();
});

Then('The Sign Up form should be displayed', async ({ signinPage }) => {
 await signinPage.signinEnable();

});

When('The user enters valid {string}, {string}, {string}, and {string}', async ({ signinPage }, signUpUN,signUpEmail,signUpPwd,signUpConfirmPwd) => {
 
  await signinPage.signUpformDetails(signUpUN,signUpEmail,signUpPwd,signUpConfirmPwd)

});
When('The user enters invalid {string}, {string}, {string}, and {string}', async ({ signinPage }, signUpUN,signUpEmail,signUpPwd,signUpConfirmPwd) => {
 
  await signinPage.signUpformDetails(signUpUN,signUpEmail,signUpPwd,signUpConfirmPwd)

});

When('The user enters valid json {string}, {string}, {string}, and {string}', async ({ signinPage }, un, email, pwd, cpwd) => {
    await signinPage.signUpformDetailsJson(un, email, pwd, cpwd);

});

When('The user enters invalid json {string}, {string}, {string}, and {string}', async ({ signinPage }, iun, iemail, ipwd, icpwd) => {

   

});

When('The user enters invalid json data at index {int}', async ({ signinPage }, index) => {
  await signinPage.fillInvalidSignUpForm(index);
});


When('The user clicks on Create Account', async ({ signinPage }) => {
  await signinPage.signUpCreataccountClick();
});

