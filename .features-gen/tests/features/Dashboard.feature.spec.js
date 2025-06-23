// Generated from: tests\features\Dashboard.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Dashboard Functionality', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The user is authenticated and on the Manan App page "https://manan.numpyninja.com/app"', null, { page }); 
  });
  
  test('Verify that the user is able to navigate to Dashboard page after clicking Dashboard button in the Manan page', async ({ When, dashboardPage, Then }) => { 
    await When('The user clicks on Dashboard button in the Manan page', null, { dashboardPage }); 
    await Then('The user is able to view the title "Welcome to Your Medical Dashboard" in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Start New Assessment" button in the Dashboard page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able to view Start New Assessment button in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Start New Assessment" button in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Start New Assessment button in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Manan page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "View Previous Assessments" button in the Dashboard page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able to view the button in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "View Previous Assessments" button in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks View Previous Assessments button in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Your Assessments" in the Previous Assessments page when there are records present', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Your Assessments in the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view two tabs "Assessment" and "Case Details" after clicking one of the previous assessments', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view the two tabs in the previous assessments', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Assessment" tab after selecting the assessment', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Assessment tab after selecting the assessment', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Case Details" after clicking "Case Details" tab in the Previous Assessments page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await When('The user clicks Case Details tab in the Previous Assessments page', null, { dashboardPage }); 
    await Then('The user is able to view Case Details tab in the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to choose anyone of the assessment when multiple assessments are present', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await When('The user clicks on anyone of the assessment when multiple assessments are present', null, { dashboardPage }); 
    await Then('The user is able to view the selected assessment when multiple assessments are present', null, { dashboardPage }); 
  });

  test('Verify that the user is able to export the assessment details in to a pdf file after clicking "Export as PDF"', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Previous Assessments page', null, { dashboardPage }); 
    await When('The user clicks on Export as PDF button', null, { dashboardPage }); 
    await Then('The user is able to export the assessment details in to a pdf file', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to Manan page after clicking "Start your first assessment" link under "Recent Assessments" in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Manan page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Previous Assessments" page after clicking "View history" link in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks View history link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Subscription plans" page after clicking "Upgrade Now" link in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Upgrade Now link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Subscription plans page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to navigate to "Account Settings" page after clicking "Update Settings" link in the Dashboard page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks Update Settings link in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is navigated to the Account Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Upgrade to Premium" option when the user is haivng "Current Plan" as "Free" in the Subscription Plans page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is able to view Upgrade to Premium option when Current Plan is Free', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Upgrade to Premium" in the Subscription Plans page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await When('The user clicks Upgrade to Premium button in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is navigated to payment page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to click "Subscribe Now" in the Subscription Plans page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Subscription Plans page', null, { dashboardPage }); 
    await When('The user clicks Subscribe Now button in the Subscription Plans page', null, { dashboardPage }); 
    await Then('The user is navigated to payment page', null, { dashboardPage }); 
  });

  test('Verify that the error message is displayed when all the mandatory fields are blank', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Payments page', null, { dashboardPage }); 
    await When('The user clicks Subscribe button with blank mandatory fields', null, { dashboardPage }); 
    await Then('The error message is displayed in the Payments page', null, { dashboardPage }); 
  });

  test('Verify that the user is able view the "Profile Icon" in the Dashboard page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await Then('The user is able view the Profile Icon in the Dashboard page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Dashboard page', null, { dashboardPage }); 
    await When('The user clicks the profile icon', null, { dashboardPage }); 
    await Then('The user is able to view the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Username and email ID" in the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Username and email ID', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Settings" in the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Settings in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Previous Assessments" in the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Previous Assessments in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Subscription Plans" in the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Subscription Plans in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Log out" in the dropdown options after clicking the profile icon', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await Then('The user is able to view Log out in the dropdown options', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Previous Assessments" page after clicking "Previous Assessments" in the profile icon', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Previous Assessments in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Previous Assessments page', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Subscription Plans" page after clicking "Subscription Plans" in the profile icon', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Subscription Plans in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Subscription plans page', null, { dashboardPage }); 
  });

  test('Verify that the user is navigated to "Settings" page after clicking "Settings" in the profile icon', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Profile Icon page', null, { dashboardPage }); 
    await When('The user clicks Settings in the profile icon', null, { dashboardPage }); 
    await Then('The user is navigated to the Account Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "User Profile - Your account information" in the "Settings" page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view User Profile - Your account information in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Username and email ID" under "User Profile" in the "Settings" page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Username and email ID under User Profile in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Notification Preferences - Manage how you receive notifications" in the "Settings" page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "Email Notifications - Receive case analysis updates via email" in the "Settings" page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to view "App Notifications - Receive in-app notifications and alerts" in the "Settings" page', async ({ Given, dashboardPage, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await Then('The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to uncheck "Email Notifications" in the "Settings" page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to uncheck Email Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to uncheck Email Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to check "Email Notifications" in the "Settings" page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to check Email Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to check Email Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to uncheck "App Notifications" in the "Settings" page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to uncheck App Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to uncheck App Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to check "App Notifications" in the "Settings" page', async ({ Given, dashboardPage, When, Then }) => { 
    await Given('The user is in the Setting page', null, { dashboardPage }); 
    await When('The user should be able to check App Notifications in the Settings page', null, { dashboardPage }); 
    await Then('The user is able to check App Notifications in the Settings page', null, { dashboardPage }); 
  });

  test('Verify that the user is able to save the changes after clicking "Save Changes" in the "Setting" page', async ({ Given, dashboardPage, When, Then }) => { 
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
  {"pwTestLine":10,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When The user clicks on Dashboard button in the Manan page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the title \"Welcome to Your Medical Dashboard\" in the Dashboard page","stepMatchArguments":[{"group":{"start":35,"value":"\"Welcome to Your Medical Dashboard\"","children":[{"start":36,"value":"Welcome to Your Medical Dashboard","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Start New Assessment button in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user clicks Start New Assessment button in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Manan page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the button in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When The user clicks View Previous Assessments button in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Your Assessments in the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the two tabs in the previous assessments","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Assessment tab after selecting the assessment","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When The user clicks Case Details tab in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Case Details tab in the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When The user clicks on anyone of the assessment when multiple assessments are present","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the selected assessment when multiple assessments are present","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given The user is in the Previous Assessments page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When The user clicks on Export as PDF button","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then The user is able to export the assessment details in to a pdf file","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Manan page","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":78,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When The user clicks View history link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":83,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":84,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When The user clicks Upgrade Now link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Subscription plans page","stepMatchArguments":[]}]},
  {"pwTestLine":88,"pickleLine":88,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":89,"gherkinStepLine":89,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When The user clicks Update Settings link in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Account Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":94,"pickleLine":98,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":100,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Upgrade to Premium option when Current Plan is Free","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":102,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"When The user clicks Upgrade to Premium button in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to payment page","stepMatchArguments":[]}]},
  {"pwTestLine":105,"pickleLine":107,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":108,"keywordType":"Context","textWithKeyword":"Given The user is in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe Now button in the Subscription Plans page","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to payment page","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":116,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":112,"gherkinStepLine":117,"keywordType":"Context","textWithKeyword":"Given The user is in the Payments page","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":118,"keywordType":"Action","textWithKeyword":"When The user clicks Subscribe button with blank mandatory fields","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":119,"keywordType":"Outcome","textWithKeyword":"Then The error message is displayed in the Payments page","stepMatchArguments":[]}]},
  {"pwTestLine":117,"pickleLine":158,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":159,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then The user is able view the Profile Icon in the Dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":122,"pickleLine":162,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":123,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given The user is in the Dashboard page","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When The user clicks the profile icon","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":128,"pickleLine":167,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":129,"gherkinStepLine":168,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":169,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Username and email ID","stepMatchArguments":[]}]},
  {"pwTestLine":133,"pickleLine":171,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":172,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Settings in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":138,"pickleLine":175,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":139,"gherkinStepLine":176,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Previous Assessments in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":143,"pickleLine":179,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Subscription Plans in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":148,"pickleLine":183,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":149,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":185,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Log out in the dropdown options","stepMatchArguments":[]}]},
  {"pwTestLine":153,"pickleLine":187,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":154,"gherkinStepLine":188,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":189,"keywordType":"Action","textWithKeyword":"When The user clicks Previous Assessments in the profile icon","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":190,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Previous Assessments page","stepMatchArguments":[]}]},
  {"pwTestLine":159,"pickleLine":192,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":160,"gherkinStepLine":193,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"When The user clicks Subscription Plans in the profile icon","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Subscription plans page","stepMatchArguments":[]}]},
  {"pwTestLine":165,"pickleLine":197,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":166,"gherkinStepLine":198,"keywordType":"Context","textWithKeyword":"Given The user is in the Profile Icon page","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":199,"keywordType":"Action","textWithKeyword":"When The user clicks Settings in the profile icon","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":200,"keywordType":"Outcome","textWithKeyword":"Then The user is navigated to the Account Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":171,"pickleLine":202,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":172,"gherkinStepLine":203,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":204,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view User Profile - Your account information in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":176,"pickleLine":206,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":177,"gherkinStepLine":207,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":208,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Username and email ID under User Profile in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":181,"pickleLine":210,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":182,"gherkinStepLine":211,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":214,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":187,"gherkinStepLine":215,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":216,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":191,"pickleLine":218,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":192,"gherkinStepLine":219,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":220,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":196,"pickleLine":222,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":197,"gherkinStepLine":223,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":224,"keywordType":"Action","textWithKeyword":"When The user should be able to uncheck Email Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":225,"keywordType":"Outcome","textWithKeyword":"Then The user is able to uncheck Email Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":202,"pickleLine":227,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":203,"gherkinStepLine":228,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":229,"keywordType":"Action","textWithKeyword":"When The user should be able to check Email Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":230,"keywordType":"Outcome","textWithKeyword":"Then The user is able to check Email Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":208,"pickleLine":232,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":209,"gherkinStepLine":233,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":234,"keywordType":"Action","textWithKeyword":"When The user should be able to uncheck App Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":235,"keywordType":"Outcome","textWithKeyword":"Then The user is able to uncheck App Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":214,"pickleLine":237,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":215,"gherkinStepLine":238,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":239,"keywordType":"Action","textWithKeyword":"When The user should be able to check App Notifications in the Settings page","stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":240,"keywordType":"Outcome","textWithKeyword":"Then The user is able to check App Notifications in the Settings page","stepMatchArguments":[]}]},
  {"pwTestLine":220,"pickleLine":242,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is authenticated and on the Manan App page \"https://manan.numpyninja.com/app\"","isBg":true,"stepMatchArguments":[{"group":{"start":52,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":53,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":221,"gherkinStepLine":243,"keywordType":"Context","textWithKeyword":"Given The user is in the Setting page","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":244,"keywordType":"Action","textWithKeyword":"When The user should be able to save the changes after clicking Save Changes in the Setting page","stepMatchArguments":[]},{"pwStepLine":223,"gherkinStepLine":245,"keywordType":"Outcome","textWithKeyword":"Then The user is able to view the success message Success - Your notification preferences have been updated","stepMatchArguments":[]}]},
]; // bdd-data-end