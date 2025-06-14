import { createBdd } from 'playwright-bdd';
//import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);



Given('The User navigate to Manan Home Page', async ({ signinPage }) => {
  // Step: Given The User navigate to Manan Home Page
  // From: tests\features\SignIn.feature:5:9
  await signinPage.NavigatetoUrl(process.env.URL);
});


// Given('The user enter correct Manan portal URL {string}', async ({ signinPage }, url) => {
//   //await page.goto(url);
//   await signinPage.NavigatetoUrl(url);
// });

When('The user should be able to land on Manan portal with Title {string}', async ({ signinPage }, title) => {
  //await expect(page).toHaveTitle(title);
  await signinPage.mananTitle(title);
});

When('User Click on Sign in button', async ({ signinPage }) => {
//await page.getByRole('button', { name: 'Sign In' }).nth(0).click();
 await signinPage.SignInbtnzero();
});

Then('User should navingate to Sign in pop up window.', async ({ signinPage }) => {
  //   await page.waitForSelector('div[role="dialog"]');
  // // Check for welcome message
  // const welcomeHeading = page.locator('h2:has-text("Welcome to MANAN")');
  // await expect(welcomeHeading).toBeVisible();
  await signinPage.signInPopup();

});


When('When User enters valid Email Address and Password', async ({ signinPage }) => {
  // Step: When When User enters valid Email Address and Password
  // From: tests\features\SignIn.feature:9:9
  await signinPage.validUNandPwd(process.env.EMAIL, process.env.PASSWORD);
  
});
// When('When User enters valid username {string} and valid password {string}', async ({ signinPage }, UN, Pwd) => {
//   // await page.getByPlaceholder('Enter your username').fill(UN);
//   // await page.getByPlaceholder('Enter your password').fill(Pwd);
//   await signinPage.validUNandPwd(UN, Pwd);
// });

When('User click on SignIn button', async ({ signinPage }) => {
  // await page.getByRole('button', { name: 'Sign In' }).first().click();
  // await page.pause();
  await signinPage.SignInbtnfirst();
  
});

Then('Then User should be redirected to Manan App page {string}', async ({ signinPage }, appPage) => {
//  page.once('dialog', async dialog => {
//   await dialog.accept(); // Clicks OK
//  });
//  await expect(page).toHaveURL(appPage);

await signinPage.mananAppURL(appPage);

});
