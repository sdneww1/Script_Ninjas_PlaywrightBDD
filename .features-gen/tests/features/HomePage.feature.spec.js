// Generated from: tests\features\HomePage.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Lauching Manan Portal', () => {

  test('Verify that user is able to open the Manan Portal', async ({ Given, homePage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await Then('The user should be able to land on Manan portal with Title "Medical Triage Assistant"', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\HomePage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to land on Manan portal with Title \"Medical Triage Assistant\"","stepMatchArguments":[{"group":{"start":59,"value":"\"Medical Triage Assistant\"","children":[{"start":60,"value":"Medical Triage Assistant","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end