import { createBdd } from 'playwright-bdd';
//import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);


Given('The user enter correct Manan portal URL', async ({ homePage }) => {
  //  await homePage.NavigatetoHomeUrl();
    await homePage.openBaseURL();
});

When('The user should be able to land on Manan portal with Title {string}', async ({ homePage }, homeTitle) => {
  //await expect(page).toHaveTitle(title);
 // await homePage.mananTitle(title);
  //  const title = await homePage.
  // expect(title).toBe(expectedTitle);
   await homePage.getHomePageTitle(homeTitle);

});