import { createBdd } from 'playwright-bdd';
import { chromium } from '@playwright/test';

import path from 'path';

const { Before } = createBdd();

Before(async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    storageState: path.resolve('playwright/.auth/login.json')
  });
  const page = await context.newPage();
  testInfo.attach('Authenticated session', {
    body: `Logged in to ${page.url()}`,
    contentType: 'text/plain'
  });
  // You could navigate or validate session here if needed
});
