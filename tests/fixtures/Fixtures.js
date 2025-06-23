import { test as base } from 'playwright-bdd'
import * as Pages from './pages';

const { SignInPage, HomePage, DashboardPage, MananFormPage } = Pages;
const createTestFunction = (PageClass) => async ({ page }, use) => {
  await use(new PageClass(page));
}

export const test = base.extend({
  signinPage: createTestFunction(SignInPage),
  homePage: createTestFunction(HomePage),
  mananForm: createTestFunction(MananFormPage),
  dashboardPage: createTestFunction(DashboardPage),
});

