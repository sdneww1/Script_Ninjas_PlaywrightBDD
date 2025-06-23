import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from "csv-parse/sync";
import { assert } from 'console';

const records = parse(fs.readFileSync("tests/TestData/MananTestData.csv"), {
    columns: true,
    skip_empty_lines: true,
})

export class MananFormPage {

    constructor(page) {
        this.page = page;
        this.patientAge = page.getByPlaceholder('Enter patient age');
        this.genderAtBirth = page.getByRole('combobox', { name: 'Gender at Birth' });
        this.GenderSelectOption = page.locator('div[role="option"]', { hasText: this.gender });
        this.ChifComplaint = page.getByPlaceholder('Main reason for visit');
        this.DetailedSymptoms = page.getByPlaceholder('Describe all symptoms in detail, including onset and severity');
        this.fileupload = page.locator('input[type="file"]');
        this.LoginSuccessMsg = page.locator('xpath=//div[@class="grid gap-1"]');
        this.FileUploadSuccessMsg = page.getByText('Success', { exact: true });
        this.MedicaHistory = page.getByPlaceholder('Relevant past medical history');
        this.CurrentMedication = page.getByPlaceholder('List current medications and dosages');
        this.VitalSignPlaceholder =page.getByPlaceholder('Enter vital signs (BP, HR, RR, Temp, SpO2) and any available lab results');
      //  this.analyzesuccessPopup = page.getByText(/Analysis Complete.*AI has analyzed the case/i);
        this.uploadsucesspopupclosebtn = page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button')
        this.analyzeCaseBtn = page.getByRole('button', { name: 'Analyze Case' });
        this.SuccessPopupcloseBtn = page.locator('button:has(svg.lucide-x)');
        this.report = page.getByText('### 1. TRIAGE LEVEL **HIGH');
        this.AnalyzePopup = page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('status');
        this.AiAnalysis = page.getByRole('heading', { name: 'AI Analysis' });
        this.AnalysisReport = page.locator('.rounded-lg').first();
        this.AgeValidation = page.getByText('Patient age is required');
        this.genderIsRequired = page.getByText('Gender is required');
        this.ChiefComplaintRequired = page.getByText('Chief complaint is required');
        this.DetailedSymptomsRequired = page.getByText('Symptoms are required');
        this.uploadfilesizeError = page.getByText("Failed to parse blood report", { exact: false });
        this.VitaSignField = page.getByRole('textbox', { name: 'Vital Signs & Lab Values' });
        this.failedAnalysis = page.getByText('Analysis failed', { exact: true });
        this.analyzereprot1 = page.getByText(/Analysis Complete\s*AI has analyzed the case\./i);
        this.shareAnalysis = page.getByText('Analysis has been exported as PDF.', { exact: true });
        this.shareAnalysisButton =page.getByRole('button', { name: 'Share Analysis' });
       
    }

    async ValidateAgePlaceholder() {
        await expect(this.patientAge).toBeVisible();

    }
    async ValidateChifComplaintPlaceholder(){
        await expect(this.ChifComplaint).toBeVisible();
    }
    
    async ValidateDetailedSymptomsPlaceholder(){
        await expect(this.DetailedSymptoms).toBeVisible();
    }

    async ValidateVitalSignsPlaceholder(){
        await expect(this.VitalSignPlaceholder).toBeVisible();
    }

    async ValidateMedicalHistory(){
        await expect(this.MedicaHistory).toBeVisible();
    }

    async ValidateCurrentMediactionPlaceholder(){
        await expect(this.CurrentMedication).toBeVisible();
 }

    async MananFormPage() {
        await expect(this.LoginSuccessMsg).toBeVisible();
        //await expect (this.patientAge).toBeVisible();
    }

    async FillFormDetails() {
        const firstRecord = records[0]; // Get only the first row
        this.age = firstRecord['Patient Age'];
        this.gender = firstRecord['Gender at Birth'];
        this.chif_complaint = firstRecord['Chief Complaint'];
        this.deatiled_symptoms = firstRecord['Detailed Symptoms'];
        this.medical_history = firstRecord['Medical History'];
        this.current_Medication = firstRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);

        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);


        //   // Wait for Analysis popup
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toHaveText('Analysis CompleteAI has analyzed the case.', { timeout: 120_000 });

    }
    async ViweReport() {
        await expect(this.AnalysisReport).toContainText('1. TRIAGE LEVEL', { timeout: 3_000 });
    }
    async PatientAgefieldValidation() {
        const secondRecord = records[1];
        this.age = secondRecord['Patient Age'];
        this.gender = secondRecord['Gender at Birth'];
        this.chif_complaint = secondRecord['Chief Complaint'];
        this.deatiled_symptoms = secondRecord['Detailed Symptoms'];
        this.medical_history = secondRecord['Medical History'];
        this.current_Medication = secondRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
       // await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        // //close popup
        // await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);

    }
    async ValidateAgeIsNumber() {
        const ageValue = await this.patientAge.inputValue();
        expect(/^\d+$/.test(ageValue)).toBeTruthy(`Age value is not numeric: "${ageValue}"`);
        expect(ageNumber).toBeGreaterThan(0);
        expect(ageNumber).toBeLessThanOrEqual(120);
    }


    async PatientAgefieldBlankValidation() {
        const thirdRecord = records[2];
        this.age = thirdRecord['Patient Age'];
        this.gender = thirdRecord['Gender at Birth'];
        this.chif_complaint = thirdRecord['Chief Complaint'];
        this.deatiled_symptoms = thirdRecord['Detailed Symptoms'];
        this.medical_history = thirdRecord['Medical History'];
        this.current_Medication = thirdRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async ValidateAgeIsBlank() {
        await expect(this.AgeValidation).toBeVisible({ timeout: 15000 });
    }
    async ValidateGenderField() {
        const FourthRecord = records[4];
        this.age = FourthRecord['Patient Age'];
        this.gender = FourthRecord['Gender at Birth'];
        this.chif_complaint = FourthRecord['Chief Complaint'];
        this.deatiled_symptoms = FourthRecord['Detailed Symptoms'];
        this.medical_history = FourthRecord['Medical History'];
        this.current_Medication = FourthRecord['Current Medications'];
        await this.patientAge.fill(this.age);

        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
       // await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async GenderNotSelected() {
        await expect(this.genderIsRequired).toBeVisible({ timeout: 15000 });
    }
    async AgeLimitValidation() {
        const AgeRecord = records[3];
        this.age = AgeRecord['Patient Age'];
        this.gender = AgeRecord['Gender at Birth'];
        this.chif_complaint = AgeRecord['Chief Complaint'];
        this.deatiled_symptoms = AgeRecord['Detailed Symptoms'];
        this.medical_history = AgeRecord['Medical History'];
        this.current_Medication = AgeRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        //await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }
    async AgelimitAssertion() {
        const ageValue = await this.patientAge.inputValue();
        const ageNumber = parseInt(ageValue, 10);
        expect(ageNumber).toBeGreaterThan(0);
        expect(ageNumber).toBeLessThanOrEqual(120);
    }

    async ChiefComplaintBlankValidation() {
        const AgeRecord = records[3];
        this.age = AgeRecord['Patient Age'];
        this.gender = AgeRecord['Gender at Birth'];
        this.chif_complaint = AgeRecord['Chief Complaint'];
        this.deatiled_symptoms = AgeRecord['Detailed Symptoms'];
        this.medical_history = AgeRecord['Medical History'];
        this.current_Medication = AgeRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();

        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
       // await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async chiefComplaintAssertion() {
        await expect(this.ChiefComplaintRequired).toBeVisible({ timeout: 15000 });
    }

    async chiefComplaintInvaliddata() {
        const sixthRecord = records[6];
        this.age = sixthRecord['Patient Age'];
        this.gender = sixthRecord['Gender at Birth'];
        this.chif_complaint = sixthRecord['Chief Complaint'];
        this.deatiled_symptoms = sixthRecord['Detailed Symptoms'];
        this.medical_history = sixthRecord['Medical History'];
        this.current_Medication = sixthRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();

        await this.ChifComplaint.fill(this.chif_complaint);
        // Store for validation use later
        this.enteredChiefComplaint = this.chif_complaint;
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async chiefComplaintInvalidAssertion() {
        const input = this.enteredChiefComplaint;
        const isOnlyDigits = /^\d+$/.test(input);
        const isOnlySpecialChars = /^[^a-zA-Z0-9\s]+$/.test(input);
        const isEmpty = input.trim() === '';
        await expect(!isOnlyDigits && !isOnlySpecialChars && !isEmpty).toBeTruthy();
    }

    async DetailedSymptomsBlankValidation() {
        const ninthRecord = records[9];
        this.age = ninthRecord['Patient Age'];
        this.gender = ninthRecord['Gender at Birth'];
        this.chif_complaint = ninthRecord['Chief Complaint'];
        this.medical_history = ninthRecord['Medical History'];
        this.current_Medication = ninthRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);

        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }
    async DetailedSymptomsAssertion() {
        await expect(this.DetailedSymptomsRequired).toBeVisible({ timeout: 15000 });
    }

    async DeatiledSymptomsInvalidValidation() {
        const eighthRecord = records[8];
        this.age = eighthRecord['Patient Age'];
        this.gender = eighthRecord['Gender at Birth'];
        this.chif_complaint = eighthRecord['Chief Complaint'];
        this.deatiled_symptoms = eighthRecord['Detailed Symptoms'];
        this.medical_history = eighthRecord['Medical History'];
        this.current_Medication = eighthRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();

        await this.ChifComplaint.fill(this.chif_complaint)

        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        // Store for validation use later
        this.enteredDetailedSymptoms = this.deatiled_symptoms;

        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //    //current medication field
        await this.CurrentMedication.fill(this.current_Medication);
        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }
    async DetailedSymptomsInvalidAssertion() {
        const input = this.enteredDetailedSymptoms;
        const isOnlyDigits = /^\d+$/.test(input);
        const isOnlySpecialChars = /^[^a-zA-Z0-9\s]+$/.test(input);
        const isEmpty = input.trim() === '';
        await expect(!isOnlyDigits && !isOnlySpecialChars && !isEmpty).toBeTruthy();
    }
    async UploadBtnEnabled() {
        await expect(this.fileupload).toBeEnabled();
    }
    async UploadBloodReportEnable() {
        await expect(this.fileupload).toBeEnabled();

    }
    async PdfReportUpload() {
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
    }
    async PdfUploadValidate() {
        await expect(this.fileupload).toHaveAttribute('accept', '.pdf');

    }
    async JpegReportUpload(){
         await this.fileupload.setInputFiles("tests/TestData/Blood Reports/Hemogram.jpg");
    }
    async JpegUploadValidate(){
         await expect(this.fileupload).toHaveAttribute('accept', '.jpeg');
    }
    async UploadReportSizeValidation(){
        const UploadRecord = records[0];
        this.age = UploadRecord['Patient Age'];
        this.gender = UploadRecord['Gender at Birth'];
        this.chif_complaint = UploadRecord['Chief Complaint'];
        this.deatiled_symptoms = UploadRecord['Detailed Symptoms'];
        this.medical_history = UploadRecord['Medical History'];
        this.current_Medication = UploadRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();

        await this.ChifComplaint.fill(this.chif_complaint)

        await this.DetailedSymptoms.fill(this.deatiled_symptoms);

        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
          await this.page.waitForTimeout(5000);

    }
    async UploadReportSizeAssert(){
        await expect (this.FileUploadSuccessMsg).toBeVisible({ timeout: 15000 });
    }
    async UploadReportInvalidValidation(){
        const UploadRecord = records[0];
        this.age = UploadRecord['Patient Age'];
        this.gender = UploadRecord['Gender at Birth'];
        this.chif_complaint = UploadRecord['Chief Complaint'];
        this.deatiled_symptoms = UploadRecord['Detailed Symptoms'];
        this.medical_history = UploadRecord['Medical History'];
        this.current_Medication = UploadRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();

        await this.ChifComplaint.fill(this.chif_complaint)

        await this.DetailedSymptoms.fill(this.deatiled_symptoms);

        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/10MB-TESTFILE_sample.pdf");
          await this.page.waitForTimeout(7000);
    }
    async UploadSuccessInvalidAssert(){
        //await expect(this.uploadfilesizeError).toBeVisible({ timeout: 15000 });
       // await expect(this.page.getByText(/Failed to parse blood report/i)).toBeVisible();
        await expect(this.uploadfilesizeError).toBeVisible({ timeout: 20000 });
    }
      
    async EnterRecordManuallyValidation(){
         const tenthRecord = records[10]; // Get only the first row
        this.age = tenthRecord['Patient Age'];
        this.gender = tenthRecord['Gender at Birth'];
        this.chif_complaint = tenthRecord['Chief Complaint'];
        this.deatiled_symptoms = tenthRecord['Detailed Symptoms'];
        this.Vital_Signs = tenthRecord['Vital Signs& Lab Values'];
        this.medical_history = tenthRecord['Medical History'];
        this.current_Medication = tenthRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
       
        await this.VitaSignField.fill(this.Vital_Signs);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        //await this.page.waitForTimeout(5000);
        // //close popup
        // await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
       // Wait for Analysis popup
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toHaveText('Analysis CompleteAI has analyzed the case.', { timeout: 120_000 });

    }
    async EnterInvalidValuesManuallyInLabValues(){
        const elevenRecord = records[11]; // Get only the first row
        this.age = elevenRecord['Patient Age'];
        this.gender = elevenRecord['Gender at Birth'];
        this.chif_complaint = elevenRecord['Chief Complaint'];
        this.deatiled_symptoms = elevenRecord['Detailed Symptoms'];
        this.Vital_Signs = elevenRecord['Vital Signs& Lab Values'];
        this.medical_history = elevenRecord['Medical History'];
        this.current_Medication = elevenRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
       
        await this.VitaSignField.fill(this.Vital_Signs);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        //await this.page.waitForTimeout(5000);
        // //close popup
        // await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
       // Wait for Analysis popup
        // await expect(this.AnalyzePopup).toHaveText('Analysis CompleteAI has analyzed the case.', { timeout: 120_000 });
    }

    async EnterInvalidValuesInLabValuesAssert(){
        await this.AiAnalysis.scrollIntoViewIfNeeded();
       await expect(this.AnalysisReport).not.toBeVisible({ timeout: 15000 });
    }

    async EnterMultipleReportValidation(){
        const firstRecord = records[0]; // Get only the first row
        this.age = firstRecord['Patient Age'];
        this.gender = firstRecord['Gender at Birth'];
        this.chif_complaint = firstRecord['Chief Complaint'];
        this.deatiled_symptoms = firstRecord['Detailed Symptoms'];
        this.medical_history = firstRecord['Medical History'];
        this.current_Medication = firstRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf",
            "tests/TestData/Blood Reports/Diabetic and Hemogram Test_Thyrocare lab.pdf.pdf",);
        //assertion for successful upload popup
        await this.page.waitForTimeout(6000);

        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
     }
     async MultipleReportAssert(){
           await this.AiAnalysis.scrollIntoViewIfNeeded();
           //  await this.page.waitForSelector('text=/Analyzing.*progress/i', {
     // state: 'detached',
     // timeout: 150_000,
    // });
        //await expect(this.analyzereprot1).toBeVisible({ timeout: 150_000 });
        await expect(
  this.page.getByRole('status', { name: /Analysis Complete\s*AI has analyzed the case\./i })
).toBeVisible({ timeout: 150_000 });
     }
async EnterInvalidMediacalHostory(){
     const TwelveRecord = records[12]; // Get only the first row
        this.age = TwelveRecord['Patient Age'];
        this.gender = TwelveRecord['Gender at Birth'];
        this.chif_complaint = TwelveRecord['Chief Complaint'];
        this.deatiled_symptoms = TwelveRecord['Detailed Symptoms'];
        this.Vital_Signs = TwelveRecord['Vital Signs& Lab Values'];
        this.medical_history = TwelveRecord['Medical History'];
        this.current_Medication = TwelveRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
       
        await this.VitaSignField.fill(this.Vital_Signs);
        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        //await this.page.waitForTimeout(5000);
        // //close popup
        // await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
       // Wait for Analysis popup
     
    }

    async EnterInvalidMediacalHostoryAssert(){
       await this.AiAnalysis.scrollIntoViewIfNeeded();
       await expect(this.page).toHaveText(/invalid input/i);

    }
    async Analyzebuttonvisible(){
        await console.log('Analyze cas button is visible');
    }
    async AnalyzebuttonvisibleAssert(){
        await expect(this.analyzeCaseBtn).toBeVisible();
    }
    async shareAnalysisValidate(){
        const firstRecord = records[0]; // Get only the first row
        this.age = firstRecord['Patient Age'];
        this.gender = firstRecord['Gender at Birth'];
        this.chif_complaint = firstRecord['Chief Complaint'];
        this.deatiled_symptoms = firstRecord['Detailed Symptoms'];
        this.medical_history = firstRecord['Medical History'];
        this.current_Medication = firstRecord['Current Medications'];
        await this.patientAge.fill(this.age);
        await this.genderAtBirth.click();
        await this.GenderSelectOption.first().click();
        await this.ChifComplaint.fill(this.chif_complaint);
        await this.DetailedSymptoms.fill(this.deatiled_symptoms);
        //pdf upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        //assertion for successful upload popup
        await this.page.waitForTimeout(3000);

        //medical history field
        await this.MedicaHistory.fill(this.medical_history);
        //current medication field
        await this.CurrentMedication.fill(this.current_Medication);

        await this.page.waitForTimeout(5000);
        //close popup
        await this.uploadsucesspopupclosebtn.click();
        //     //Analyze case button
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);


        //   // Wait for Analysis popup
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.shareAnalysisButton).toBeVisible({ timeout: 150_000 });
        await this.shareAnalysisButton.click();
    }
    async shareAnalysisAssert(){
    
        //await expect(this.shareAnalysis).toBeVisible({ timeout: 9000 });
        await expect(this.shareAnalysis).toBeVisible({ timeout: 9000 });

    }
    }





//export{ SignInPage };