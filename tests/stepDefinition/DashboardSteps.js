import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Fixtures';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test);


Given('The user is authenticated and user navigated to the Manan Form page', async ({ homePage }) => {
  await homePage.appnavigteURL(); 
});


When('User clicks on Dashboard button', async ({ dashboardPage }) => {
  await dashboardPage.clickDashboardButton();
});

Then('User should navigate to Dashboard Page {string}', async ({ page }, partialUrl) => {
  await expect(page).toHaveURL(new RegExp(partialUrl));
  await expect(page.getByText('Welcome to Your Medical Dashboard')).toBeVisible();

});
