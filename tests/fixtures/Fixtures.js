import {test as base} from 'playwright-bdd'
import { SignInPage } from '../pageObject/SignINPOM'

export const test = base.extend(({
  signinPage: async({page}, use) => {
    const loginPage = new SignInPage(page);
    await use(loginPage);
  }
}));