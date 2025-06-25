import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/login.json';
const loginUrl = process.env.BaseURL;

setup('authenticate', async ({ page }) => {

    await page.goto(loginUrl);
    await page.getByRole('button', { name: 'Sign In' }).nth(0).click();
    await page.getByPlaceholder('Enter your username').fill(process.env.EMAIL);
    await page.getByPlaceholder('Enter your password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).first().click();
    await page.waitForURL('**/app', { timeout: 15000 });
    await page.context().storageState({ path: authFile });
});
