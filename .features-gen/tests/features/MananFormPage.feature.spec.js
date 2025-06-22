// Generated from: tests\features\MananFormPage.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Manan app Form Page', () => {

  test.beforeEach('Background: Login to Manan portal', async ({ Given, homePage, And, signinPage, When }) => {
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await And('User Click on Sign in button', null, { signinPage }); 
    await When('When User enters valid Email Address and Password', null, { signinPage }); 
    await And('User click on SignIn button', null, { signinPage }); 
  });
  
  test('Verify that user is able to view "Enter patient age" placeholder for "Patients Age" field', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('The user should be able to view Enter patient age placeholder for Patients Age field', null, { mananForm }); 
    await Then('The user should see the placeholder for Patients Age field', null, { mananForm }); 
  });

  test('Check the user is able to add a new patient\'s details Successfully', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User Enter all deatils in the form and click on Analyze Case button', null, { mananForm }); 
    await Then('The user should able to see the detailed analysis', null, { mananForm }); 
  });

  test('Check the user is able to view error message on Patients Age field', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('Then User enter any of Alphabets in Age field', null, { mananForm }); 
    await Then('The user should able to view error alert Enter valid Age', null, { mananForm }); 
  });

  test('Check the user is able to view error message when Patients Age field is blank', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User leave Patient Age field blank And enter other fields', null, { mananForm }); 
    await Then('The user should able to view error alert Patient age is required', null, { mananForm }); 
  });

  test('Verify error message for Gender at birth field is not selected', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User does not select gender filed And enter other fields', null, { mananForm }); 
    await Then('The user should able to view error alert Gender is required', null, { mananForm }); 
  });

  test('Verify user enters an age above the allowed limit', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User enters higher in the age text box', null, { mananForm }); 
    await Then('The user should able to view error message Age must be below range should be displayed', null, { mananForm }); 
  });

  test('Verify error message for Chief Complaint field is blank', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User leave Chief Complaint field blank And enter other fields', null, { mananForm }); 
    await Then('The user should able to view error alert Chief complaint is required', null, { mananForm }); 
  });

  test('Verify that user enter numeric value for Chief Complaint field', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User enter numbers in Chief Complaint field', null, { mananForm }); 
    await Then('The user should able to  view error message enter valid data in Chief Complaint field', null, { mananForm }); 
  });

  test('Verify error message for Detailed Symptoms field is blank', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User leave Detailed Symptoms field blank And enter other fields', null, { mananForm }); 
    await Then('The user should able to view error message  that User should enter Detailed Symptoms', null, { mananForm }); 
  });

  test('Verify that user enter invalid data  enter for Detailed Symptoms field', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User enter invalid data in Detailed Symptoms field', null, { mananForm }); 
    await Then('The user should able to view error alert Detailed Symptoms field', null, { mananForm }); 
  });

  test('Verify if upload blood report button is enable', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User checks if upload blood report is enabled', null, { mananForm }); 
    await Then('Upload blood report is enabled', null, { mananForm }); 
  });

  test('Verify  user should be able to upload blood report in pdf format only', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User is uploading pdf file only', null, { mananForm }); 
    await Then('The user should be able to view the pdf file uploaded successfully', null, { mananForm }); 
  });

  test('Verify user should be able to upload blood report jpeg format only', async ({ Given, mananForm, When, Then }) => { 
    await Given('user is on the Manan Form Page', null, { mananForm }); 
    await When('User is uploading jpeg file', null, { mananForm }); 
    await Then('The user should be able to see the jpeg uploaded successfully', null, { mananForm }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\MananFormPage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user should be able to view Enter patient age placeholder for Patients Age field","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then The user should see the placeholder for Patients Age field","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User Enter all deatils in the form and click on Analyze Case button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The user should able to see the detailed analysis","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Then User enter any of Alphabets in Age field","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error alert Enter valid Age","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User leave Patient Age field blank And enter other fields","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error alert Patient age is required","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User does not select gender filed And enter other fields","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error alert Gender is required","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User enters higher in the age text box","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error message Age must be below range should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User leave Chief Complaint field blank And enter other fields","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error alert Chief complaint is required","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When User enter numbers in Chief Complaint field","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then The user should able to  view error message enter valid data in Chief Complaint field","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When User leave Detailed Symptoms field blank And enter other fields","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error message  that User should enter Detailed Symptoms","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":56,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When User enter invalid data in Detailed Symptoms field","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then The user should able to view error alert Detailed Symptoms field","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":61,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User checks if upload blood report is enabled","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Upload blood report is enabled","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User is uploading pdf file only","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to view the pdf file uploaded successfully","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User is uploading jpeg file","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to see the jpeg uploaded successfully","stepMatchArguments":[]}]},
]; // bdd-data-end