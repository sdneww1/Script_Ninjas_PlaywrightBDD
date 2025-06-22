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

// Then('Then User should be redirected to Manan App page {string}', async ({ signinPage }, appPage) => {
// //  page.once('dialog', async dialog => {
// //   await dialog.accept(); // Clicks OK
// //  });
// //  await expect(page).toHaveURL(appPage);

// //await signinPage.mananAppURL(appPage);

// });

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
  //await signinPage.
  await signinPage.signupisEnable();
});
// When('The user is on the Sign In form', async ({ signinPage }) => {
//   await signinPage.loginisenable();
// });


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

When('The user clicks on Create Account', async ({ signinPage }) => {
  await signinPage.signUpCreataccountClick();
});




