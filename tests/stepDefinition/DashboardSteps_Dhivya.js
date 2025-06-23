import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);

Given('The user is authenticated and on the Manan App page {string}', async ({ page }, urlapp) => {
  await page.goto(urlapp);
  await expect(page).toHaveURL(urlapp);
});

When('The user clicks on Dashboard button in the Manan page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
});

Then('The user is able to view the title {string} in the Dashboard page', async ({ dashboardPage }, title) => {
  await dashboardPage.dashboardPageText(title);
});

Given('The user is in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
});

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

Then('The user is able to view Your Assessments in the Previous Assessments page', async ({ dashboardPage }) => {
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

When('The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.startFirstAssessmentLinkClick();
});

When('The user clicks View history link in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.viewHistoryLinkClick();
});

When('The user clicks Upgrade Now link in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.upgradeNowLinkClick();
});

Then('The user is navigated to the Subscription plans page', async ({ dashboardPage }) => {
  await dashboardPage.subscriptionPlanText();
});

When('The user clicks Update Settings link in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.updateSettingsLinkClick();
});

Then('The user is navigated to the Account Settings page', async ({ dashboardPage }) => {
  await dashboardPage.updateSettingsText();
});

When('The user clicks Upgrade to Premium button under Usage Statistics in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.upgradePremiumBtnClick();
});

Given('The user is in the Subscription Plans page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
  await dashboardPage.upgradeNowLinkClick();
});

Then('The user is able to view Upgrade to Premium option when Current Plan is Free', async ({ dashboardPage }) => {
  await dashboardPage.currentPlanTextCheck();
});

When('The user clicks Upgrade to Premium button in the Subscription Plans page', async ({ dashboardPage }) => {
  await dashboardPage.upgradePremiumBtnClick();
});

Then('The user is navigated to payment page', async ({ dashboardPage }) => {
  await dashboardPage.paymentsPageText();
});

When('The user clicks Subscribe Now button in the Subscription Plans page', async ({ dashboardPage }) => {
  await dashboardPage.subscribeNowBtnClick();
});

Given('The user is in the Payments page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
  await dashboardPage.upgradeNowLinkClick();
  await dashboardPage.subscribeNowBtnClick();
});

Then('The user is able to view the user email ID in the payment page', async ({ dashboardPage }) => {
  await dashboardPage.emailPaymentText();
});

When('The user clicks Subscribe button with blank mandatory fields', async ({ dashboardPage }) => {
  await dashboardPage.subscribeBtnClick();
});

Then('The error message is displayed in the Payments page', async ({ dashboardPage }) => {
  await dashboardPage.errorPayment();
});

When('The user enters Card Number in the payments page', async ({ dashboardPage }) => {
  await dashboardPage.cardNumberBtnFill();
});

Then('The user is able to enter Card Number in the payments page', async ({ dashboardPage }) => {
  await dashboardPage.cardNumberBtnCheck();
});













Then('The user is able view the Profile Icon in the Dashboard page', async ({ dashboardPage }) => {
  await dashboardPage.profileIconCheck();
});

When('The user clicks the profile icon', async ({ dashboardPage }) => {
  await dashboardPage.profileIconClick();
});

Then('The user is able to view the dropdown options', async ({ dashboardPage }) => {
  await dashboardPage.profileIconDropDown();
});

Given('The user is in the Profile Icon page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
  await dashboardPage.profileIconClick();
});

Then('The user is able to view Username and email ID', async ({ dashboardPage }) => {
  await dashboardPage.userNameEmailCheck();
});

Then('The user is able to view Settings in the dropdown options', async ({ dashboardPage }) => {
  await dashboardPage.settingsCheck();
});

Then('The user is able to view Previous Assessments in the dropdown options', async ({ dashboardPage }) => {
  await dashboardPage.previousAssessmentsCheck();
});

Then('The user is able to view Subscription Plans in the dropdown options', async ({ dashboardPage }) => {
  await dashboardPage.subscriptionPlansCheck();
});

Then('The user is able to view Log out in the dropdown options', async ({ dashboardPage }) => {
  await dashboardPage.logoutCheck();
});

When('The user clicks Previous Assessments in the profile icon', async ({ dashboardPage }) => {
  await dashboardPage.previousAssessmentsClick();
});

When('The user clicks Subscription Plans in the profile icon', async ({ dashboardPage }) => {
  await dashboardPage.subscriptionPlansClick();
});

When('The user clicks Settings in the profile icon', async ({ dashboardPage }) => {
  await dashboardPage.settingsClick();
});

Given('The user is in the Setting page', async ({ dashboardPage }) => {
  await dashboardPage.dashboardBtnClick();
  await dashboardPage.profileIconClick();
  await dashboardPage.settingsClick();
});

Then('The user is able to view User Profile - Your account information in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.settingsPageText();
});

Then('The user is able to view Username and email ID under User Profile in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.userNameEmailSettingsText();
});

Then('The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.notificationPreferencesText();
});

Then('The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.eMailNotificationText();
});

Then('The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.appNotificationText();
});

When('The user should be able to uncheck Email Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.uncheckEmailNotification();
});

Then('The user is able to uncheck Email Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.uncheckEmailNotificationAssert();
});

When('The user should be able to check Email Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.checkEmailNotification();
});

Then('The user is able to check Email Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.checkEmailNotificationAssert();
});

When('The user should be able to uncheck App Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.uncheckAppNotification();
});

Then('The user is able to uncheck App Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.uncheckAppNotificationAssert();
});

When('The user should be able to check App Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.checkAppNotification();
});

Then('The user is able to check App Notifications in the Settings page', async ({ dashboardPage }) => {
  await dashboardPage.checkAppNotificationAssert();
});

When('The user should be able to save the changes after clicking Save Changes in the Setting page', async ({ dashboardPage }) => {
  await dashboardPage.saveChangesBtnClick();
});

Then('The user is able to view the success message Success - Your notification preferences have been updated', async ({ dashboardPage }) => {
  await dashboardPage.saveChangesText();
});