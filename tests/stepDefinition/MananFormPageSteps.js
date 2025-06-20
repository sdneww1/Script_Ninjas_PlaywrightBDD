import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);


Given(': user is on the Manan Form Page', async ({ mananForm }) => {
    console.log('user is on manan form page');
       await mananForm.MananFormPage();
});

When(': User Enter all deatils in the form and click on {string} button', async ({mananForm}, arg) => {
    await mananForm.FillFormDetails();
});

Then(': The user should able to see the detailed analysis', async ({}) => {
  // Step: Then : The user should able to see the detailed analysis
  // From: tests\features\MananFormPage.feature:6:5

});