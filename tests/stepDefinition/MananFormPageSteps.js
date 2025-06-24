import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures';
import { MananFormPage } from '../pageObject/MananFormPOM';
const { Given, When, Then } = createBdd(test);

Given('The user is authenticated and user navigated to the Manan Form page', async ({ homePage }) => {
  await homePage.appnavigteURL();
});

//////////Placeholder//////////////////
When('The user should be able to view Enter patient age placeholder for Patients Age field', async ({ mananForm }) => {
   await console.log('User is able to view Enter patient age placeholder in field');
});

Then('The user should see the placeholder for Patients Age field', async ({ mananForm }) => {
  await mananForm.ValidateAgePlaceholder();
});

When('The user should be able to view Describe all symptoms in detail, including onset and severity placeholder for Detailed Symptoms field', async ({mananForm}) => {  
   
  await console.log('User is able view the placeholder in field');
});

Then('The user should see the placeholder for Detailed Symptoms field', async ({mananForm}) => {
  await mananForm.ValidateDetailedSymptomsPlaceholder();
});

When('The user should be able to view Enter vital signs \\(BP, HR, RR, Temp, SPO2) and any available lab results placeholder for Vital Signs & Lab Values field', async ({mananForm}) => {
    await console.log('User is able view the placeholder in field for vital signs');
});

Then('The user should see the placeholder for Vital Signs & Lab Values field', async ({mananForm}) => {
  await mananForm.ValidateVitalSignsPlaceholder();
});

When('The user should be able to view Main reason for visit placeholder for Chief Complaint field', async ({mananForm}) => {
  await console.log('User is able to view Main reson for visit placeholder in field');
});

Then('The user should see the placeholder for Chief Complaint field', async ({mananForm}) => {
 await mananForm.ValidateChifComplaintPlaceholder();
});

When('The user should be able to view Relevant past medical history placeholder for Medical History field', async ({mananForm}) => {
   await console.log('User is able to view Relevant past medical history placeholder in field');
});

Then('The user should see the placeholder for Medical History field', async ({mananForm}) => {
  await mananForm.ValidateMedicalHistory();
});

When('The user should be able to view List current medications and dosages placeholder for Current Medications field', async ({mananForm}) => {
 await console.log('User is able to view List current medications and dosages placeholder in field');
});

Then('The user should see the placeholder for Current Medications field', async ({mananForm}) => {
  await mananForm.ValidateCurrentMediactionPlaceholder();
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

When('User is uploading the pdf file with size less than 5MB', async ({mananForm}) => {
  await mananForm.UploadReportSizeValidation();
});

Then('The user should be able to see the file get uploaded successfully', async ({mananForm}) => {
  await mananForm.UploadReportSizeAssert();
});

When('User is uploading the pdf file with size more than 5MB', async ({mananForm}) => {
  await mananForm.UploadReportInvalidValidation();
});

Then('The user should be able to see error message', async ({mananForm}) => {
   await mananForm.UploadSuccessInvalidAssert();
});

When('User enter all BP,HR,RR,Temp,SpO2 values in the field', async ({mananForm}) => {
  await mananForm.EnterRecordManuallyValidation();
});

Then('The user should able to view the detailed analysis report', async ({mananForm}) => {
  await mananForm.ViweReport();
});

When('Verify error message for entering wrong values in vital signs and lab values', async ({mananForm}) => {
 await mananForm.EnterInvalidValuesManuallyInLabValues();
});

Then('The user should able to view error message', async ({mananForm}) => {
 await mananForm.EnterInvalidValuesInLabValuesAssert();
});

When('User enter more than one report in vital signs and lab values field', async ({mananForm}) => {
 await mananForm.EnterMultipleReportValidation();
});

Then('The user should be able to view multiple reports get added', async ({mananForm}) => {
  
  await mananForm.ViweReport();
});

When('User enter incorrect values in  medical history field', async ({mananForm}) => {
  //await mananForm.EnterInvalidMediacalHostory();
});

Then('The user should be able to see error message in medical history field', async ({mananForm}) => {
 //await mananForm.EnterInvalidMediacalHostoryAssert();
});


When('User validate if  Analyze Case button should be visible in Manan app Page', async ({mananForm}) => {
 await mananForm.Analyzebuttonvisible();
});

Then('The user should able to see Analyze Case button in manan app Page', async ({mananForm}) => {
await mananForm.AnalyzebuttonvisibleAssert();
});

When('User is clicking on share analysis button', async ({mananForm}) => {
   await mananForm.shareAnalysisValidate();
});

Then('The user should view pdf generated success message', async ({mananForm}) => {
  await mananForm.shareAnalysisAssert();
});

