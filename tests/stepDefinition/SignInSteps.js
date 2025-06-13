import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();



Given('The user enter correct Manan portal URL {string}', async ({page}, url) => {
  await page.goto(url);
});

When('The user should be able to land on Manan portal with Title {string}', async ({page}, title) => {
  await expect(page).toHaveTitle(title);
});

When('User Click on Sign in button', async ({page}) => {
  await page.getByRole('button', { name: 'Sign In' }).click();
});

Then('User should navingate to Sign in pop up window.', async ({}) => {
  // Step: Then User should navingate to Sign in pop up window.
  // From: tests\features\SignIn.feature:8:1
});

When('When User enters valid username {string} and valid password {string}', async ({}, arg, arg1) => {
  // Step: When When User enters valid username "NewSdetuser2" and valid password "Abcd1234!"
  // From: tests\features\SignIn.feature:9:1
});

When('User click on SignIn button', async ({}) => {
  // Step: And User click on SignIn button
  // From: tests\features\SignIn.feature:10:1
});

Then('Then User should be redirected to Manan App page', async ({}) => {
  // Step: Then Then User should be redirected to Manan App page
  // From: tests\features\SignIn.feature:11:1
});