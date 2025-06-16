// Generated from: tests\features\SignIn.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('SignIn validation feature for Manan Portal', () => {

  test('Verify User is able to navigate to Manan Application Page', async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('The user should be able to land on Manan portal with Title "Medical Triage Assistant"', null, { homePage }); 
    await And('User Click on Sign in button', null, { signinPage }); 
    await Then('User should navingate to Sign in pop up window.', null, { signinPage }); 
    await When('When User enters valid Email Address and Password', null, { signinPage }); 
    await And('User click on SignIn button', null, { signinPage }); 
    await Then('Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"', null, { signinPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\SignIn.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When The user should be able to land on Manan portal with Title \"Medical Triage Assistant\"","stepMatchArguments":[{"group":{"start":59,"value":"\"Medical Triage Assistant\"","children":[{"start":60,"value":"Medical Triage Assistant","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And User Click on Sign in button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should navingate to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When When User enters valid Email Address and Password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And User click on SignIn button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Then User should be redirected to Manan App page \"https://manan.numpyninja.com/app\"","stepMatchArguments":[{"group":{"start":49,"value":"\"https://manan.numpyninja.com/app\"","children":[{"start":50,"value":"https://manan.numpyninja.com/app","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end