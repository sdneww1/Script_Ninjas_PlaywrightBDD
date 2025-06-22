import {test as base} from 'playwright-bdd'
//import { SignInPage } from '../pageObject/SignINPOM'
import * as Pages from './pages';

//<<<<<<< Shweta
//const { SignInPage , HomePage, MananFormPage } = Pages;
//=======
const { SignInPage , HomePage , DashboardPage ,MananFormPage} = Pages;
//>>>>>>> Supriya

const createTestFunction = (PageClass) => async ({page}, use) =>{
 await use(new PageClass(page));
}


export const test = base.extend({
  signinPage: createTestFunction(SignInPage),
  homePage: createTestFunction(HomePage),
//<<<<<<< Shweta
  mananForm: createTestFunction(MananFormPage)
 // });
//=======
  dashboardPage: createTestFunction(DashboardPage),
  });
//>>>>>>> Supriya
