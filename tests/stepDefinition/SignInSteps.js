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
await page.getByRole('button', { name: 'Sign In' }).nth(0).click();
});

Then('User should navingate to Sign in pop up window.', async ({page}) => {
    await page.waitForSelector('div[role="dialog"]');
  // Check for welcome message
 const welcomeHeading = page.locator('h2:has-text("Welcome to MANAN")');
  await expect(welcomeHeading).toBeVisible();
});

When('When User enters valid username {string} and valid password {string}', async ({page}, UN, Pwd) => {
  await page.getByPlaceholder('Enter your username').fill(UN);
  await page.getByPlaceholder('Enter your password').fill(Pwd);
});

When('User click on SignIn button', async ({page}) => {
  await page.getByRole('button', { name: 'Sign In' }).first().click();
  await page.pause();
});

Then('Then User should be redirected to Manan App page {string}', async ({page}, appPage) => {
 page.once('dialog', async dialog => {
  await dialog.accept(); // Clicks OK
 });
 await expect(page).toHaveURL(appPage);

});