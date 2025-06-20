// Generated from: tests\features\HomePageSignIN.feature
import { test } from "../../../tests/fixtures/Fixtures.js";

test.describe('Manan Form Page Access via Home Page with Authentication', () => {

  test('Verify navigation to Manan Form Page via \'Try Now\' link with authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Try Now Link', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page', null, { signinPage }); 
  });

  test('Verify navigation to Manan Form Page via \'Try for free\' button with authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Try for free button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page', null, { signinPage }); 
  });

  test('Verify navigation to Manan Form Page via \'For Medical Professionals\' button with authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on For Medical Professionals button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page', null, { signinPage }); 
  });

  test('Verify navigation to Manan Form Page via \'Start Medical Triage Assessment\' button with authentication', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Start Medical Triage Assessment button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page', null, { signinPage }); 
  });

  test('Verify Manan form Page for Valid Username and Password', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Sign in button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page', null, { signinPage }); 
  });

  test('Verify "Registration Successful" Pop up on Manan Form Message', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Sign in button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page with Registration Successful Pop up', null, { signinPage }); 
  });

  test('Verify ""Welcome to MANAN Medical Assistant." Pop up message on Manan Form Page', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Sign in button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
    await And('User enters valid Username and Password', null, { signinPage }); 
    await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
    await Then('User should be redirected to Manan Form page with Welcome to MANAN Medical Assistant. Pop up Message', null, { signinPage }); 
  });

  test.describe('Verify error message for invalid Username and Password', () => {

    test('Example #1', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "" and "testuser1"', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get error message "Please fill in all fields"', null, { signinPage }); 
    });

    test('Example #2', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "testuser1" and ""', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get error message "Please fill in all fields"', null, { signinPage }); 
    });

    test('Example #3', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "" and ""', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get error message "Please fill in all fields"', null, { signinPage }); 
    });

  });

  test.describe('Verify pop up error message for invalid Username and Password', () => {

    test('Example #1', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "madhuri@gmail.com" and "testuser1"', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get pop up error message "Login Failed"', null, { signinPage }); 
    });

    test('Example #2', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "testuser1" and "madhuri@gmail.com"', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get pop up error message "Login Failed"', null, { signinPage }); 
    });

    test('Example #3', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And, signinPage, Then }) => { 
      await Given('The user enter correct Manan portal URL', null, { homePage }); 
      await When('User click on Sign in button', null, { homePage }); 
      await And('User navigates to Sign in pop up window.', null, { homePage }); 
      await And('User enters valid "madhuri@gmail.com" and "madhuri@gmail.com"', null, { signinPage }); 
      await And('the user clicks the Sign-In button on the Sign-In popup', null, { homePage }); 
      await Then('User should get pop up error message "Login Failed"', null, { signinPage }); 
    });

  });

  test('Verify navigation to Sign-Up form via \'Sign Up\' button on Welcome popup window', { tag: ['@nonauth'] }, async ({ Given, homePage, When, And }) => { 
    await Given('The user enter correct Manan portal URL', null, { homePage }); 
    await When('User click on Sign in button', null, { homePage }); 
    await And('User navigates to Sign in pop up window.', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\HomePageSignIN.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@nonauth"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User click on Try Now Link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":15,"tags":["@nonauth"],"steps":[{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User click on Try for free button","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":["@nonauth"],"steps":[{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User click on For Medical Professionals button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":33,"tags":["@nonauth"],"steps":[{"pwStepLine":34,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User click on Start Medical Triage Assessment button","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":43,"tags":["@nonauth"],"steps":[{"pwStepLine":43,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":52,"tags":["@nonauth"],"steps":[{"pwStepLine":52,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page with Registration Successful Pop up","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":61,"tags":["@nonauth"],"steps":[{"pwStepLine":61,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"And User enters valid Username and Password","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Manan Form page with Welcome to MANAN Medical Assistant. Pop up Message","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":80,"tags":["@nonauth"],"steps":[{"pwStepLine":72,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"And User enters valid \"\" and \"testuser1\"","stepMatchArguments":[{"group":{"start":18,"value":"\"\"","children":[{"start":19,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":25,"value":"\"testuser1\"","children":[{"start":26,"value":"testuser1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should get error message \"Please fill in all fields\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Please fill in all fields\"","children":[{"start":31,"value":"Please fill in all fields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":80,"pickleLine":81,"tags":["@nonauth"],"steps":[{"pwStepLine":81,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"And User enters valid \"testuser1\" and \"\"","stepMatchArguments":[{"group":{"start":18,"value":"\"testuser1\"","children":[{"start":19,"value":"testuser1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"\"","children":[{"start":35,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":85,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should get error message \"Please fill in all fields\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Please fill in all fields\"","children":[{"start":31,"value":"Please fill in all fields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":89,"pickleLine":82,"tags":["@nonauth"],"steps":[{"pwStepLine":90,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"And User enters valid \"\" and \"\"","stepMatchArguments":[{"group":{"start":18,"value":"\"\"","children":[{"start":19,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":25,"value":"\"\"","children":[{"start":26,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should get error message \"Please fill in all fields\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Please fill in all fields\"","children":[{"start":31,"value":"Please fill in all fields","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":102,"pickleLine":96,"tags":["@nonauth"],"steps":[{"pwStepLine":103,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And User enters valid \"madhuri@gmail.com\" and \"testuser1\"","stepMatchArguments":[{"group":{"start":18,"value":"\"madhuri@gmail.com\"","children":[{"start":19,"value":"madhuri@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"testuser1\"","children":[{"start":43,"value":"testuser1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":107,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should get pop up error message \"Login Failed\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Login Failed\"","children":[{"start":38,"value":"Login Failed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":111,"pickleLine":97,"tags":["@nonauth"],"steps":[{"pwStepLine":112,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And User enters valid \"testuser1\" and \"madhuri@gmail.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"testuser1\"","children":[{"start":19,"value":"testuser1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"madhuri@gmail.com\"","children":[{"start":35,"value":"madhuri@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":116,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should get pop up error message \"Login Failed\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Login Failed\"","children":[{"start":38,"value":"Login Failed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":120,"pickleLine":98,"tags":["@nonauth"],"steps":[{"pwStepLine":121,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And User enters valid \"madhuri@gmail.com\" and \"madhuri@gmail.com\"","stepMatchArguments":[{"group":{"start":18,"value":"\"madhuri@gmail.com\"","children":[{"start":19,"value":"madhuri@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"madhuri@gmail.com\"","children":[{"start":43,"value":"madhuri@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":125,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And the user clicks the Sign-In button on the Sign-In popup","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should get pop up error message \"Login Failed\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Login Failed\"","children":[{"start":38,"value":"Login Failed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":131,"pickleLine":102,"tags":["@nonauth"],"steps":[{"pwStepLine":132,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"Given The user enter correct Manan portal URL","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"When User click on Sign in button","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And User navigates to Sign in pop up window.","stepMatchArguments":[]}]},
]; // bdd-data-end