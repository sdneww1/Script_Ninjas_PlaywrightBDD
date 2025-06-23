// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd'
import dotenv from 'dotenv';
// import 'dotenv/config';

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
})

// console.log("Loaded ENV:", process.env.ENV);
// console.log("BaseURL:", process.env.BaseURL);

const testDir = defineBddConfig({
   importTestFrom:'tests/fixtures/Fixtures.js',
   paths: ['tests/features/***.feature'],
   require:['tests/stepDefinition/***.js'],
   
});
// const testDir = defineBddConfig({
//   features: 'tests/features/***.feature',
//   steps: [
//     'tests/stepDefinition/***.js',
//     'tests/fixtures/fixture.js',
//     // 'tests/hooks/Hooks.js'
//   ]
// });


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir,
  //  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    screenshot:'off',
    video:'off',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testDir: './', testMatch: [/auth\/.*authsetup\.js$/] },
    //  { name: 'firefoxsetup', testDir: './', testMatch: [/auth\/.*authsetupFirefox\.js$/] },

     
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        //  storageState: 'tests/.auth/signin.json' ,

        storageState: 'playwright/.auth/login.json'
      },
       dependencies: ['setup'],
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] ,
    //       storageState: 'playwright/.auth/loginfirefox.json',
    //   },
    //         dependencies: ['firefoxsetup'],

    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

