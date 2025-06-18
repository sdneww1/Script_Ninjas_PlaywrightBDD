import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Fixtures';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test);



// // Given('The user enter correct Manan portal URL {string}', async ({page},url) => {
// //   // Step: Given The user enter correct Manan portal URL
// //   // From: tests\features\DashboardPage.feature:4:1const cookies = require('../../playwright/.auth/user2.json');
// //    const cookies = require('../../playwright/.auth/login.json');
// //    const cookiesArray = cookies.cookies;
// //    await page.context().addCookies(cookiesArray);
// //    await page.goto(url);
// // });

// // When('The user should be able to land on Manan portal with Title {string}', async ({ homePage }, title) => {
// //   await homePage.mananTitle(title);
// // });

// // When('User Click on Sign in button', async ({ signinPage }) => {
// //  await signinPage.SignInbtnzero();
// // });

// When('User Click on Dashboard button', async ({ dashboardPage }) => {
//   await dashboardPage.clickDashboardButton();
// });

// Then('User should navigate to dashboard Page {string}.', async ({ dashboardPage },expectedUrl) => {
//     await dashboardPage.verifyDashboardPage(expectedUrl);
  
// });

Given('The user is authenticated and on the Manan App page {string}', async ({ page }, urlapp) => {
  await page.goto(urlapp);
  await expect(page).toHaveURL(urlapp);
});

When('User clicks on Dashboard button', async ({ dashboardPage }) => {
  await dashboardPage.clickDashboardButton();
});

Then('User should navigate to Dashboard Page {string}', async ({ page }, partialUrl) => {
  await expect(page).toHaveURL(new RegExp(partialUrl));
  await expect(page.getByText('Welcome to Your Medical Dashboard')).toBeVisible();
  page.pause
});
