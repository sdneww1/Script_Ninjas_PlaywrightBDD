import { test, expect } from '@playwright/test';
import { getAllTestData } from '../Utils/csvUtils.js';
import { MananFormPage } from '../pageObject/MananFormPOM.js';

const testDataList = getAllTestData('tests/TestData/MananTestData.csv');

for (const [index, data] of testDataList.entries()) {

  test(`Form submission - Data Set ${index + 1}`, async ({ page }) => {
    const formPage = new MananFormPage(page);
    await formPage.FillFormDetails(data);

  });
}
