// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
})


const testDir = defineBddConfig({

  //features: 'tests/features/***.feature',
  features: 'tests/features/MananFormPage.feature',
   steps: ['tests/stepDefinition/***steps.js', 'tests/fixtures/Fixtures.js'
  ],

});

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
  reporter: [['html'], ['allure-playwright']],

  timeout: 90 * 1000, // 2 min per test
  expect: {
    timeout: 15 * 1000, // 15 sec for expect()
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    baseURL: process.env.BaseURL || 'https://manan.numpyninja.com',
    //storageState: 'playwright/.auth/login.json', // ✅ this loads your session
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15 * 1000, // ⏱ 10 seconds per action
    /* Optional: Timeout for page navigation */
    navigationTimeout: 30 * 1000,    // Optional: timeout for page loads

  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // { name: 'setup', testDir: './', testMatch: [/auth\/.*authsetup\.js$/] },
    // { name: 'chromium-auth', testDir: './tests/'},
    // { name: 'firefoxsetup', testDir: './', testMatch: [/auth\/.*firefoxsetup\.js$/] },
    {
      name: 'chromium-auth',
      grep: /@nonauth/,
      grepInvert: /@auth/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    { name: 'setup', testDir: './', testMatch: [/auth\/.*authsetup\.js$/] },
    {
      name: 'chromium',
      grep: /@auth/,
      grepInvert: /@nonauth/,

      use: {
        ...devices['Desktop Chrome'],
            name: 'chromium',
  use: {
    browserName: 'chromium',
    viewport: null, // disables Playwright default viewport
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
        storageState: 'playwright/.auth/login.json',
     },
      dependencies: ['setup'],
    },
    //     // {
    //   name: 'webkit-nonauth',
    //   grep: /@nonauth/,
    //   grepInvert: /@auth/,
    //   use: { ...devices['Desktop Safari'] },
    
    // },

    // {
    //   name: 'webkit-auth',
    //   grep: /@nonauth/,
    //   grepInvert: /@auth/,
    //   use: { ...devices['Desktop Safari'],
    //      storageState: 'playwright/.auth/loginfirefox.json',
    //    },
    // },


    // {
    //   name: 'firefox-nonauth',
    //     grep: /@nonauth/,
    //   grepInvert: /@auth/,
    //     timeout: 90 * 1000, 
    //   use: { ...devices['Desktop Firefox'] ,
    //         },

    // },

    // {
    //   name: 'firefoxsetup1',
    //     grep: /@auth/,
    //   grepInvert: /@nonauth/,
    //     timeout: 60 * 1000, // ⬅️ 60 seconds (you can customize)
    //   use: { ...devices['Desktop Firefox'] ,
    //       storageState: 'playwright/.auth/loginfirefox.json',
    //   },
    //         dependencies: ['firefoxsetup'],

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

