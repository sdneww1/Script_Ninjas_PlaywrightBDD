import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);
Given('The user is authenticated and user navigated to the Manan Form page', async ({ page }) => {
   //await homePage.appnavigteURL();
  //await homePage.aappnavigteURL();
  await page.goto('/app');
  
});

// When('User click on Try Now link', async ({ homePage }) => {
//   await homePage.trynowlink();
// });

// Then('User should navigate to Manan Form Page', async ({ homePage }) => {
//   //  await page.goto('/app');
//   // const textapp = page.getByText('(Multi-Algorithm Navigation and Analysis Node)');
//   // await expect(textapp).toHaveText(/(Multi-Algorithm Navigation and Analysis Node)/);
// });

// When('User click on Pricing link', async ({ homePage }) => {
//   await homePage.pricingLink();
// });

// Then('User should navigate to Subscription Page', async ({ homePage }) => {
   
  
//   await homePage.subscriptionLink();
//   // const textSubPage = page.getByText('Choose the plan that fits your needs.');
//   // await expect(textSubPage).toHaveText(/Choose the plan that fits your needs./);
// });

// When('User click on Try for free button', async ({}) => {
//   // Step: When User click on Try for free button
//   // From: tests\features\HomePageSignIN.feature:18:1
// });

// When('User click on View Pricing Plans button', async ({}) => {
//   // Step: When User click on View Pricing Plans button
//   // From: tests\features\HomePageSignIN.feature:23:1
// });

// When('User click on Start Medical Triage Assessment button', async ({}) => {
//   // Step: When User click on Start Medical Triage Assessment button
//   // From: tests\features\HomePageSignIN.feature:28:1
// });