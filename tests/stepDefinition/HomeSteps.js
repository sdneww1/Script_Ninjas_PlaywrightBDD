import { createBdd } from 'playwright-bdd';
//import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);


Given('The user enter correct Manan portal URL', async ({ homePage }) => {
    await homePage.openBaseURL();
});

When('The user should be able to land on Manan portal with Title {string}', async ({ homePage }, homeTitle) => {
   await homePage.getHomePageTitle(homeTitle);
});

When('User click on Sign in button', async ({ homePage }) => {
 await homePage.SignInbtnzero();
});

// Then('User should navingate to Sign in pop up window.', async ({ homePage }) => {
//   await signinPage.signInPopup();

// });
Then('User should navigate to Sign in pop up window.', async ({ homePage }) => {
  await homePage.signInPopup();
});

// Then('User should navigate to Sign in pop up window.', async ({ homePage }) => {
  
// });

When('User click on Try Now Link', async ({ homePage }) => {
  await homePage.trynowlink();
});

When('User click on Pricing Link', async ({ homePage }) => {
  await homePage.pricingLink();
});

When('User click on Try for free button', async ({ homePage }) => {
  await homePage.tryforfreebtnm();
});


When('User click on For Medical Professionals button', async ({ homePage }) => {
  await homePage.forMedicalProfessionalbtn();  
});

When('User click on Start Medical Triage Assessment button', async ({ homePage }) => {
  await homePage.medicalTriageAssessmentbtn();
});

Then('User should navigate to Subscription Page', async ({ homePage }) => {
  await homePage.subspageValidation();  
});

When('User click on View Pricing Plans button', async ({ homePage }) => {
  await homePage.viewPricingPlanClick();
});



When('The user click on About us link which is present bottom of the page below the company heading.', async ({ homePage }) => {       
 await homePage.aboutUsLinkClick();
});

Then('The user should navigate to NumpyNinja-LifeChanging Products About Us Page.', async ({ homePage }) => {
  await homePage.aboutUsPagenavigation();
});

When('The user click on Blog link which is present bottom of the page below the company heading.', async ({ homePage }) => {
  await homePage.blogLinkClick();
});

Then('The user should navigate to NumpyNinja-LifeChanging Products Blog Page.', async ({ homePage }) => {
  await homePage.blogPagenavigation();
});

When('The user click on Contact Us link which is present bottom of the page below the company heading.', async ({ homePage }) => {     
  await homePage.contactUSLinkClick();
});

Then('The user should navigate to NumpyNinja Contact Us Page.', async ({ homePage }) => {
  await homePage.contactUSPagenavigation();
});




