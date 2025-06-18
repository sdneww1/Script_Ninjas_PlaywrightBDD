import { createBdd } from 'playwright-bdd';
//import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);

When('The user clicks on Dashboard button in the Manan page', async ({ dashboardPage }) => {
    await dashboardPage.dashboardBtnClick();
});

Then('The user is able to view the title {string} in the Dashboard page', async ({ dashboardPage }, title) => {
    await dashboardPage.dashboardPageText(title);
});

Given('The user is in the Dashboard page', async ({ dashboardPage }) => {
    await dashboardPage.dashboardBtnClick();
});

// When('The user should be able to view Start New Assessment button in the Manan page', async ({}) => {

// });

Then('The user is able to view Start New Assessment button in the Dashboard page', async ({ dashboardPage }) => {
    await dashboardPage.startNewAssessText();
});

When('The user clicks Start New Assessment button in the Dashboard page', async ({ dashboardPage }) => {
    await dashboardPage.startNewAssessmentBtnClick();
});

Then('The user is navigated to the Manan page', async ({ dashboardPage }) => {
    await dashboardPage.mananPageTitle();
});

Then('The user is able to view the button in the Dashboard page', async ({ dashboardPage }) => {
    await dashboardPage.viewPrevAssessmentBtnText();
});

When('The user clicks View Previous Assessments button in the Dashboard page', async ({ dashboardPage }) => {
    await dashboardPage.viewPrevAssessmentBtnClick();
});

Then('The user is navigated to the Previous Assessments page', async ({ dashboardPage }) => {
    await dashboardPage.prevAssessmentPageText();
});

Given('The user is in the Previous Assessments page', async ({ dashboardPage }) => {
    await dashboardPage.dashboardBtnClick();
    await dashboardPage.viewPrevAssessmentBtnClick();
});

Then('The user is able to view No assessments found in the Previous Assessments page', async ({ dashboardPage }) => {
    await dashboardPage.noAssessmentText();
});

When('The user clicks Start a New Assessment button in the Previous Assessments page', async ({ dashboardPage }) => {
  await dashboardPage.startPrevAssessmentBtnClick();
});

Then('The user is able to view Your Assessments in the Previous Assessments page', async ({dashboardPage}) => {
  await dashboardPage.yourAssessmentText();
});

Then('The user is able to view the two tabs in the previous assessments', async ({ dashboardPage }) => {
  await dashboardPage.assessmentDetails();
  await dashboardPage.caseDetails();
});

Then('The user is able to view Assessment tab after selecting the assessment', async ({ dashboardPage }) => {
  await dashboardPage.assessmentDetails();
});

When('The user clicks Case Details tab in the Previous Assessments page', async ({ dashboardPage }) => {
  await dashboardPage.caseDetailsBtnClick();
});

Then('The user is able to view Case Details tab in the Previous Assessments page', async ({ dashboardPage }) => {
  await dashboardPage.caseDetails();
});

When('The user clicks on anyone of the assessment when multiple assessments are present', async ({ dashboardPage }) => {
  await dashboardPage.multipleAssessment();
});

Then('The user is able to view the selected assessment when multiple assessments are present', async ({ dashboardPage }) => {        
  await dashboardPage.assessmentDetails();
});

When('The user clicks on Export as PDF button', async ({ dashboardPage }) => {
  await dashboardPage.exportToPDFBtnClick();
});

Then('The user is able to export the assessment details in to a pdf file', async ({ dashboardPage }) => {
  await dashboardPage.exportToPDFText();
});