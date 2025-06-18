import { chromium, firefox } from '@playwright/test';
//import { afterEach, beforeEach } from 'node:test';
import { createBdd } from 'playwright-bdd';
import fs from 'fs';
import path from 'path';

 const { BeforeAll, AfterAll } = createBdd();
 const storageStatePath = 'playwright/.auth/login.json';


// // const storageStatePath = path.join('tests', '.auth', 'signin.json');
// // const loginUrl = process.env.BaseURL || 'https://manan.numpyninja.com';

// BeforeAll(async ({ browser }) => {
//   if (fs.existsSync(storageStatePath)) {
//     console.log('✅ Using existing authentication state');
//     return;
//   }
//   await context.storageState({ path: storageStatePath });
//    await context.close();
// });

// AfterAll(() => {
//   console.log('✅ Authentication hook completed.');
// });

// import { createBdd } from 'playwright-bdd';
// import fs from 'fs';
// import path from 'path';

// const { BeforeAll, AfterAll } = createBdd();

// const storageStatePath = path.join('tests', '.auth', 'signin.json');
// const loginUrl = process.env.BaseURL || 'https://manan.numpyninja.com';

// BeforeAll(async ({ browser }) => {
//   if (fs.existsSync(storageStatePath)) return;

//   const context = await browser.newContext();
//   const page = await context.newPage();


//   // Go to login page
//   await page.goto(loginUrl);

//   // Perform login (adjust selectors)
//   await page.getByRole('button', { name: 'Sign In' }).nth(0).click();
//   await page.getByPlaceholder('Enter your username').fill(process.env.EMAIL);
//   await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD);
//   await page.getByRole('button', { name: 'Sign In' }).first().click();

//   // Wait for successful navigation
//   await page.waitForURL('**/app', { timeout: 15000 });

//   // Save login state
//   fs.mkdirSync(path.dirname(storageStatePath), { recursive: true });
//   await context.storageState({ path: storageStatePath });
//   await context.close();

//   console.log('✅ Auth state saved.');
// });

// AfterAll(() => {
//   console.log('✅ Authentication hook completed.');
// });

// // const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
// // const { chromium } = require('playwright');


// // let browser;
// // BeforeAll(async()=>{
// //   console.log('Launching browser');
// //  browser = await chromium.launch({ headless: false });
// // });

// // AfterAll(async()=>{
// //   console.log('closing browser');
// //   await browser.close();
// // });

// // Before(async function () {
// //   this.context = await browser.newContext();
// //   this.page = await this.context.newPage();
// //   console.log('opening url');
// //   await this.page.goto(process.env.BaseURL);
// //   console.log('url opened');
// // });

// // After(async function () {
// //   await this.page.close();
// //   await this.context.close();
// // });





// // import { Before, After, BeforeAll, AfterAll } from 'playwright-bdd';
// // import { test as base } from '@playwright/test';

// // // Before each scenario
// // Before(async ({ page }) => {
// //   await page.goto(process.env.BaseURL);
// //   console.log('Navigated to base URL');
// // });

// // // After each scenario
// // After(async ({ page }, scenario) => {
// //   if (scenario.result?.status === 'FAILED') {
// //     await page.screenshot({ path: `screenshots/${scenario.pickle.name}.png` });
// //   }
// //   await page.close();
// // });
