// Generated from: tests\features\Dashboard.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Dashboard Functionality', () => {

  test.beforeEach('Background', async ({ Given, homePage }) => {
    await Given('The user is authenticated and user navigated to the Manan Form page', null, { homePage }); 
  });
  
  test('Verify that the user is able to navigate to Dashboard page after clicking Dashboard button in the Manan page', { tag: ['@auth'] }, async ({ When, dashboardPage, Then }) => { 
    await When('The user clicks on Dashboard button in the Manan page', null, { dashboardPage }); 
    await Then('The user is able to view the title "Welcome to Your Medical Dashboard" in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Start New Assessment" button in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able to view Start New Assessment button in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Start New Assessment" button in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Start New Assessment button in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Manan page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "View Previous Assessments" button in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able to view the button in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "View Previous Assessments" button in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks View Previous Assessments button in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Your Assessments" in the Previous Assessments page when there are records present', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Your Assessments in the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view two tabs "Assessment" and "Case Details" after clicking one of the previous assessments', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view the two tabs in the previous assessments', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Assessment" tab after selecting the assessment', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Assessment tab after selecting the assessment', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Case Details" after clicking "Case Details" tab in the Previous Assessments page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await When('The user clicks Case Details tab in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Case Details tab in the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to choose anyone of the assessment when multiple assessments are present', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await When('The user clicks on anyone of the assessment when multiple assessments are present', null, { dashboardPage }); 
    await Then('The user is able to view the selected assessment when multiple assessments are present', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to Manan page after clicking "Start your first assessment" link under "Recent Assessments" in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Manan page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Previous Assessments" page after clicking "View history" link in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks View history link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Subscription plans" page after clicking "Upgrade Now" link in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Upgrade Now link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Subscription plans page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Account Settings" page after clicking "Update Settings" link in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Update Settings link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Account Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Upgrade to Premium" option when the user is haivng "Current Plan" as "Free" in the Subscription Plans page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is able to view Upgrade to Premium option when Current Plan is Free', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Upgrade to Premium" in the Subscription Plans page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await When('The user clicks Upgrade to Premium button in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is navigated to payment page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Subscribe Now" in the Subscription Plans page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await When('The user clicks Subscribe Now button in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is navigated to payment page', null, { dashboardPage }); 
  });

  test('Verify that the error message is displayed when all the mandatory fields are blank', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Payments page', null, { dashboardPage }); 
    await When('The user clicks Subscribe button with blank mandatory fields', null, { dashboardPage }); 
    await Then('The error message is displayed in the Payments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able view the "Profile Icon" in the Dashboard page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able view the Profile Icon in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks the profile icon', null, { dashboardPage }); 
    await Then('The user is able to view the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Username and email ID" in the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Username and email ID', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Settings" in the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Settings in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Previous Assessments" in the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Previous Assessments in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Subscription Plans" in the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Subscription Plans in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Log out" in the dropdown options after clicking the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Log out in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Previous Assessments" page after clicking "Previous Assessments" in the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Previous Assessments in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Subscription Plans" page after clicking "Subscription Plans" in the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Subscription Plans in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Subscription plans page', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Settings" page after clicking "Settings" in the profile icon', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Settings in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Account Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "User Profile - Your account information" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view User Profile - Your account information in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Username and email ID" under "User Profile" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Username and email ID under User Profile in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Notification Preferences - Manage how you receive notifications" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Email Notifications - Receive case analysis updates via email" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "App Notifications - Receive in-app notifications and alerts" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to uncheck "Email Notifications" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to uncheck Email Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to uncheck Email Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to check "Email Notifications" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to check Email Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to check Email Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to uncheck "App Notifications" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to uncheck App Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to uncheck App Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to check "App Notifications" in the "Settings" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to check App Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to check App Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to save the changes after clicking "Save Changes" in the "Setting" page', { tag: ['@auth'] }, async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to save the changes after clicking Save Changes in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view the success message Success - Your notification preferences have been updated', null, { dashboardPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\Dashboard.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":16,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When The user clicks on Dashboard button in the Manan page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the title \"Welcome to Your Medical Dashboard\" in the Dashboard page","stepMatchArguments":[{"group":{"start":35,"value":"\"Welcome to Your Medical Dashboard\"","children":[{"start":36,"value":"Welcome to Your Medical Dashboard","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":20,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Start New Assessment button in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":24,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user clicks Start New Assessment button in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Manan page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":29,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the button in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":33,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When The user clicks View Previous Assessments button in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":49,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Your Assessments in the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":53,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the two tabs in the previous assessments","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":57,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Assessment tab after selecting the assessment","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":61,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When The user clicks Case Details tab in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Case Details tab in the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":66,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When The user clicks on anyone of the assessment when multiple assessments are present","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the selected assessment when multiple assessments are present","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":76,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Manan page","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":81,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When The user clicks View history link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":86,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When The user clicks Upgrade Now link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Subscription plans page","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":91,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When The user clicks Update Settings link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Account Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":88,"pickleLine":101,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Upgrade to Premium option when Current Plan is Free","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":105,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When The user clicks Upgrade to Premium button in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to payment page","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":110,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":111,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":112,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe Now button in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to payment page","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":119,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Given The user is in the Payments page","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe button with blank mandatory fields","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then The error message is displayed in the Payments page","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":158,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":159,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then The user is able view the Profile Icon in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":162,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When The user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":122,"pickleLine":167,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":168,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":169,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Username and email ID","stepMatchArguments":[]}]},
  {"pwTestLine":127,"pickleLine":171,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":172,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Settings in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":132,"pickleLine":175,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":176,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Previous Assessments in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":137,"pickleLine":179,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Subscription Plans in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":142,"pickleLine":183,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":185,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Log out in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":147,"pickleLine":187,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":188,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":189,"keywordType":"Action","textWithKeyword":"When The user clicks Previous Assessments in the profile icon","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":190,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":153,"pickleLine":192,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":193,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"When The user clicks Subscription Plans in the profile icon","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Subscription plans page","stepMatchArguments":[]}]},
  {"pwTestLine":159,"pickleLine":197,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":198,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":199,"keywordType":"Action","textWithKeyword":"When The user clicks Settings in the profile icon","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":200,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Account Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":165,"pickleLine":202,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":203,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":204,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view User Profile - Your account information in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":170,"pickleLine":206,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":207,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":172,"gherkinStepLine":208,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Username and email ID under User Profile in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":175,"pickleLine":210,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":211,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":180,"pickleLine":214,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":215,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":216,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":185,"pickleLine":218,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":219,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":220,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":190,"pickleLine":222,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":223,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":224,"keywordType":"Action","textWithKeyword":"When The user should be able to uncheck Email Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":225,"keywordType":"Outcome","textWithKeyword":"Then The user is able to uncheck Email Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":196,"pickleLine":227,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":197,"gherkinStepLine":228,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":229,"keywordType":"Action","textWithKeyword":"When The user should be able to check Email Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":230,"keywordType":"Outcome","textWithKeyword":"Then The user is able to check Email Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":202,"pickleLine":232,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":233,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":234,"keywordType":"Action","textWithKeyword":"When The user should be able to uncheck App Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":235,"keywordType":"Outcome","textWithKeyword":"Then The user is able to uncheck App Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":208,"pickleLine":237,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":238,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":239,"keywordType":"Action","textWithKeyword":"When The user should be able to check App Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":240,"keywordType":"Outcome","textWithKeyword":"Then The user is able to check App Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":214,"pickleLine":242,"tags":["@auth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and user navigated to the Manan Form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":243,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":244,"keywordType":"Action","textWithKeyword":"When The user should be able to save the changes after clicking Save Changes in the Setting page","stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":245,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the success message Success - Your notification preferences have been updated","stepMatchArguments":[]}]},
]; // bdd-data-end