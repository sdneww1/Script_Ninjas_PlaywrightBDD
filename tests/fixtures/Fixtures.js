import {test as base} from 'playwright-bdd'
//import { SignInPage } from '../pageObject/SignINPOM'
import * as Pages from './pages';

const { SignInPage , HomePage , DashboardPage } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) =>{
 await use(new PageClass(page));
}


export const test = base.extend({
  signinPage: createTestFunction(SignInPage),
  homePage: createTestFunction(HomePage),
  dashboardPage: createTestFunction(DashboardPage),
  });
