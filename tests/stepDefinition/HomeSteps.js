import { createBdd } from 'playwright-bdd';
//import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);


Given('The user enter correct Manan portal URL', async ({ homePage }) => {
  await homePage.NavigatetoHomeUrl('https://manan.numpyninja.com');
});

Then('The user should be able to land on Manan portal with Title {string}', async ({ homePage }, title) => {
  //await expect(page).toHaveTitle(title);
  await homePage.mananTitle(title);
});