// Generated from: tests\features\HomePage.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Manan Portal Home Page without authentication', () => {

  test('Verify that user is able to open the Manan Portal', { tag: ['@nonauth'] }, async ({ Given, homePage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await Then('The user should be able to land on Manan portal with Title "Medical Triage Assistant"', null, { homePage }); 
  });

  test('Verify Sign-In popup for \'Sign In\' button without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Sign in button', null, { homePage }); 
    await Then('User should navigate to Sign in pop up window.', null, { homePage }); 
  });

  test('Verify Sign-In popup for \'Try Now\' Link without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Try Now Link', null, { homePage }); 
    await Then('User should navigate to Sign in pop up window.', null, { homePage }); 
  });

  test('Verify Subscription page for \'Pricing\' Link without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Pricing Link', null, { homePage }); 
    await Then('User should navigate to Subscription Page', null, { homePage }); 
  });

  test('Verify Sign-In popup for \'Try for free\' button without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Try for free button', null, { homePage }); 
    await Then('User should navigate to Sign in pop up window.', null, { homePage }); 
  });

  test('Verify Sign-In popup \'For Medical Professionals\' button without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on For Medical Professionals button', null, { homePage }); 
    await Then('User should navigate to Sign in pop up window.', null, { homePage }); 
  });

  test('Verify Sign-In popup for \'Start Medical Triage Assessment\' button without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Start Medical Triage Assessment button', null, { homePage }); 
    await Then('User should navigate to Sign in pop up window.', null, { homePage }); 
  });

  test('Verify Subscription page for \'View Pricing Plans\' button without authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on View Pricing Plans button', null, { homePage }); 
    await Then('User should navigate to Subscription Page', null, { homePage }); 
  });

  test('Verify that the \'About Us\' link is accessible on the Manan Home Page without authentication.', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('The user click on About us link which is present bottom of the page below the company heading.', null, { homePage }); 
    await Then('The user should navigate to NumpyNinja-LifeChanging Products About Us Page.', null, { homePage }); 
  });

  test('Verify that the \'Blog\' link is accessible on the Manan Home Page without authentication.', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('The user click on Blog link which is present bottom of the page below the company heading.', null, { homePage }); 
    await Then('The user should navigate to NumpyNinja-LifeChanging Products Blog Page.', null, { homePage }); 
  });

  test('Verify that the \'Contac Us\' link is accessible on the Manan Home Page without authentication.', { tag: ['@nonauth'] }, async ({ Given, homePage, When, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('The user click on Contact Us link which is present bottom of the page below the company heading.', null, { homePage }); 
    await Then('The user should navigate to NumpyNinja Contact Us Page.', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\HomePage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@nonauth"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then The user should be able to land on Manan portal with Title \"Medical Triage Assistant\"","stepMatchArguments":[{"group":{"start":59,"value":"\"Medical Triage Assistant\"","children":[{"start":60,"value":"Medical Triage Assistant","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":9,"tags":["@nonauth"],"steps":[{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Sign in pop up window.","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":["@nonauth"],"steps":[{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User click on Try Now Link","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Sign in pop up window.","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":21,"tags":["@nonauth"],"steps":[{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User click on Pricing Link","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Subscription Page","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":27,"tags":["@nonauth"],"steps":[{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User click on Try for free button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Sign in pop up window.","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":33,"tags":["@nonauth"],"steps":[{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User click on For Medical Professionals button","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Sign in pop up window.","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":39,"tags":["@nonauth"],"steps":[{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User click on Start Medical Triage Assessment button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Sign in pop up window.","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":45,"tags":["@nonauth"],"steps":[{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User click on View Pricing Plans button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to Subscription Page","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":51,"tags":["@nonauth"],"steps":[{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When The user click on About us link which is present bottom of the page below the company heading.","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then The user should navigate to NumpyNinja-LifeChanging Products About Us Page.","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":57,"tags":["@nonauth"],"steps":[{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When The user click on Blog link which is present bottom of the page below the company heading.","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then The user should navigate to NumpyNinja-LifeChanging Products Blog Page.","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":63,"tags":["@nonauth"],"steps":[{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When The user click on Contact Us link which is present bottom of the page below the company heading.","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then The user should navigate to NumpyNinja Contact Us Page.","stepMatchArguments":[]}]},
]; // bdd-data-end