// Generated from: tests\features\MananFormPage.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Manan app Form Page', () => {

  test.beforeEach('Background: Login to Manan portal', async ({ Given, homePage, And, signinPage, When }) => {
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await And('User Click on Sign in button', null, { signinPage }); 
    await When('When User enters valid Email Address and Password', null, { signinPage }); 
    await And('User click on SignIn button', null, { signinPage }); 
  });
  
  test('Check the user is able to add a new patient\'s details Successfully', async ({ Given, mananForm, When }) => { 
    await Given(': user is on the Manan Form Page', null, { mananForm }); 
    await When(': User Enter all deatils in the form and click on \'Analyze Case\' button', null, { mananForm }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\MananFormPage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User Click on Sign in button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given : user is on the Manan Form Page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When : User Enter all deatils in the form and click on 'Analyze Case' button","stepMatchArguments":[{"group":{"start":50,"value":"'Analyze Case'","children":[{"children":[{"children":[]}]},{"start":51,"value":"Analyze Case","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end