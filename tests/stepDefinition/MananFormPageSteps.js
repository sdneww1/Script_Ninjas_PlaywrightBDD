import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
const { Given, When, Then } = createBdd(test);

//////////Placeholder//////////////////
When('The user should be able to view Enter patient age placeholder for Patients Age field', async ({ mananForm }) => {

});

Then('The user should see the placeholder for Patients Age field', async ({ mananForm }) => {
  await mananForm.ValidateAgePlaceholder();
});
////////////////////////////////////////////////////////




////////Valid Details//////////////////////////////////

Given('user is on the Manan Form Page', async ({ signinPage }) => {
   console.log('user is on manan form page');
  // await mananForm.MananFormPage();
  //await homePage.appnavigteURL();
  await signinPage.mananFormURL();

});

When('User Enter all deatils in the form and click on Analyze Case button', async ({ mananForm }) => {
  await mananForm.FillFormDetails();
});

Then('The user should able to see the detailed analysis', async ({ mananForm }) => {
  await mananForm.ViweReport();

});
/////////////////////////////////////////////////////////
//////////invalid Age//////////////
When('Then User enter any of Alphabets in Age field', async ({ mananForm }) => {
  await mananForm.PatientAgefieldValidation();

});

Then('The user should able to view error alert Enter valid Age', async ({ mananForm }) => {
  await mananForm.ValidateAgeIsNumber();
});

/////////Blank Age////////////////
When('User leave Patient Age field blank And enter other fields', async ({ mananForm }) => {
  await mananForm.PatientAgefieldBlankValidation();
});

Then('The user should able to view error alert Patient age is required', async ({ mananForm }) => {
  await mananForm.ValidateAgeIsBlank();
});

//////////Gender field////
When('User does not select gender filed And enter other fields', async ({ mananForm }) => {
  await mananForm.ValidateGenderField();
});

Then('The user should able to view error alert Gender is required', async ({ mananForm }) => {
  await mananForm.GenderNotSelected();
});
///////age limit///
When('User enters higher in the age text box', async ({ mananForm }) => {
  await mananForm.AgeLimitValidation();
});

Then('The user should able to view error message Age must be below range should be displayed', async ({ mananForm }) => {
  await mananForm.AgelimitAssertion();
});

/////chief complaint///
When('User leave Chief Complaint field blank And enter other fields', async ({ mananForm }) => {
  await mananForm.ChiefComplaintBlankValidation();
});

Then('The user should able to view error alert Chief complaint is required', async ({ mananForm }) => {
  await mananForm.chiefComplaintAssertion();
});

When('User enter numbers in Chief Complaint field', async ({ mananForm }) => {
  await mananForm.chiefComplaintInvaliddata();
});

Then('The user should able to  view error message enter valid data in Chief Complaint field', async ({ mananForm }) => {
  await mananForm.chiefComplaintInvalidAssertion();
});

///////////detailed Symptoms//
When('User leave Detailed Symptoms field blank And enter other fields', async ({ mananForm }) => {
  await mananForm.DetailedSymptomsBlankValidation();
});

Then('The user should able to view error message  that User should enter Detailed Symptoms', async ({ mananForm }) => {
  await mananForm.DetailedSymptomsAssertion();
});

When('User enter invalid data in Detailed Symptoms field', async ({ mananForm }) => {
  await mananForm.DeatiledSymptomsInvalidValidation();
});

Then('The user should able to view error alert Detailed Symptoms field', async ({ mananForm }) => {
  await mananForm.DetailedSymptomsInvalidAssertion();
});

When('User checks if upload blood report is enabled', async ({ mananForm }) => {
  const isEnabled = await mananForm.UploadBtnEnabled();
  console.log('Upload Blood Report button is enabled:', isEnabled);
});

Then('Upload blood report is enabled', async ({ mananForm }) => {
  await mananForm.UploadBloodReportEnable();
});

When('User is uploading pdf file only', async ({ mananForm }) => {
  await mananForm.PdfReportUpload();
});

Then('The user should be able to view the pdf file uploaded successfully', async ({ mananForm }) => {
  await mananForm.PdfUploadValidate();
});

When('User is uploading jpeg file', async ({mananForm}) => {
   await mananForm.JpegReportUpload();
});

Then('The user should be able to see the jpeg uploaded successfully', async ({mananForm}) => {
  await mananForm.JpegUploadValidate();
});