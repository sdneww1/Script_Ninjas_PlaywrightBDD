import { test, expect } from '@playwright/test';
import { getAllTestData } from '../Utils/csvUtils.js';
import { assert } from 'console';

const testData = getAllTestData('tests/TestData/MananTestData.csv');

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
        this.VitalSignPlaceholder = page.getByPlaceholder('Enter vital signs (BP, HR, RR, Temp, SpO2) and any available lab results');
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
        this.shareAnalysisButton = page.getByRole('button', { name: 'Share Analysis' });
        this.shareAnalysisPopup = page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('status');
        this.SubscriptionLimit = page.getByText('Subscription Limit Reached');
    }

    async ValidateAgePlaceholder() {
        await expect(this.patientAge).toBeVisible();

    }
    async ValidateChifComplaintPlaceholder() {
        await expect(this.ChifComplaint).toBeVisible();
    }

    async ValidateDetailedSymptomsPlaceholder() {
        await expect(this.DetailedSymptoms).toBeVisible();
    }

    async ValidateVitalSignsPlaceholder() {
        await expect(this.VitalSignPlaceholder).toBeVisible();
    }

    async ValidateMedicalHistory() {
        await expect(this.MedicaHistory).toBeVisible();
    }

    async ValidateCurrentMediactionPlaceholder() {
        await expect(this.CurrentMedication).toBeVisible();
    }

    async FillFormDetails(data) {

        const {
            'Patient Age': age,
            'Gender at Birth': gender,
            'Chief Complaint': complaint,
            'Detailed Symptoms': symptoms,
            'Medical History': medicalHistory,
            'Current Medications': currentMeds
        } = data;

        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toHaveText('Analysis CompleteAI has analyzed the case.', { timeout: 120_000 });
    }

    async ViewReport() {
        const analysisReport = this.page.locator("xpath=//*[contains(text(), 'TRIAGE LEVEL')]");
        await analysisReport.scrollIntoViewIfNeeded();
        await expect(analysisReport).toBeVisible({ timeout: 3_000 });
    }

    //for scenario age field alphabets//////
    async PatientAgefieldValidation(data) {

        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }
    async ValidateAgeIsNumber() {
        const ageValue = await this.patientAge.inputValue();
        expect(/^\d+$/.test(ageValue)).toBeTruthy(`Age value is not numeric: "${ageValue}"`);
        expect(ageNumber).toBeGreaterThan(0);
        expect(ageNumber).toBeLessThanOrEqual(120);
    }


    async PatientAgefieldBlankValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);  // here the age could be blank 
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async ValidateAgeIsBlank() {
        await expect(this.AgeValidation).toBeVisible({ timeout: 15000 });
    }
    async ValidateGenderField(data) {
        const age = data['Patient Age'];
        const complaint = data['Chief Complaint'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async GenderNotSelected() {
        await expect(this.genderIsRequired).toBeVisible({ timeout: 15000 });
    }
    async AgeLimitValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }
    async AgelimitAssertion() {
        const ageValue = await this.patientAge.inputValue();
        const ageNumber = parseInt(ageValue, 10);
        expect(ageNumber).toBeGreaterThan(0);
        expect(ageNumber).toBeLessThanOrEqual(120);
    }

    async ChiefComplaintBlankValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async chiefComplaintAssertion() {
        await expect(this.ChiefComplaintRequired).toBeVisible({ timeout: 15000 });
    }

    async chiefComplaintInvaliddata(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const symptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        this.enteredChiefComplaint = complaint;
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
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

    async DetailedSymptomsBlankValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
    }

    async DetailedSymptomsAssertion() {
        await expect(this.DetailedSymptomsRequired).toBeVisible({ timeout: 15000 });
    }

    async DeatiledSymptomsInvalidValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        // Store for validation use later
        this.enteredDetailedSymptoms = detailedSymptoms;
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
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

    async JpegReportUpload() {
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/Hemogram.jpg");
    }

    async JpegUploadValidate() {
        await expect(this.fileupload).toHaveAttribute('accept', '.jpeg');
    }

    async UploadReportSizeValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(5000);
    }
    async UploadReportSizeAssert(data) {
        await expect(this.FileUploadSuccessMsg).toBeVisible({ timeout: 15000 });
    }
    async UploadReportInvalidValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        // upload invalid report (e.g., >10MB PDF or wrong type)
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/10MB-TESTFILE_sample.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);

    }
    async UploadSuccessInvalidAssert() {
        await expect(this.FileUploadSuccessMsg).not.toBeVisible({ timeout: 15000 });
    }

    async EnterRecordManuallyValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const vitalSigns = data['Vital Signs& Lab Values'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        await this.VitaSignField.fill(vitalSigns);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
        await this.AiAnalysis.scrollIntoViewIfNeeded();

    }

    async EnterInvalidValuesManuallyInLabValues(data) {

        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const vitalSigns = data['Vital Signs& Lab Values'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        await this.VitaSignField.fill(vitalSigns);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
    }

    async EnterInvalidValuesInLabValuesAssert() {
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalysisReport).not.toBeVisible({ timeout: 15000 });
    }

    async EnterMultipleReportValidation(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        // upload multiple PDFs
        await this.fileupload.setInputFiles([
            "tests/TestData/Blood Reports/CBC-sample 1.pdf",
            "tests/TestData/Blood Reports/Diabetic and Hemogram Test_Thyrocare lab.pdf.pdf"
        ]);
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toBeVisible({ timeout: 120_000 });
    }

    async EnterInvalidMediacalHostory(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const vitalSigns = data['Vital Signs& Lab Values'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/10MB-TESTFILE_sample.pdf");
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
    }
    async EnterInvalidMediacalHostoryAssert() {
        const input = await this.MedicaHistory.inputValue();
        const isOnlyDigits = /^\d+$/.test(input);
        const isOnlySpecialChars = /^[^a-zA-Z0-9\s]+$/.test(input);
        const isEmpty = input.trim() === '';
        await expect(!isOnlyDigits && !isOnlySpecialChars && !isEmpty).toBeTruthy();

    }
    async EnterInvalidCurrentMedication(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/10MB-TESTFILE_sample.pdf");
        await this.page.waitForTimeout(7000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(6000);
    }

    async InvalidCurrentMedicationAssert() {
        const input = await this.CurrentMedication.inputValue();
        const isOnlyDigits = /^\d+$/.test(input);
        const isOnlySpecialChars = /^[^a-zA-Z0-9\s]+$/.test(input);
        const isEmpty = input.trim() === '';
        await expect(!isOnlyDigits && !isOnlySpecialChars && !isEmpty).toBeTruthy();

    }
    async Analyzebuttonvisible() {
        await console.log('Analyze cas button is visible');
    }
    async AnalyzebuttonvisibleAssert() {
        await expect(this.analyzeCaseBtn).toBeVisible();
    }
    async shareAnalysisValidate(data) {
        const age = data['Patient Age'];
        const gender = data['Gender at Birth'];
        const complaint = data['Chief Complaint'];
        const detailedSymptoms = data['Detailed Symptoms'];
        const medicalHistory = data['Medical History'];
        const currentMeds = data['Current Medications'];
        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(detailedSymptoms);
        // PDF upload
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(8000);
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toBeVisible({ timeout: 120_000 });
        await this.shareAnalysisButton.click();
    }
    async shareAnalysisAssert() {
        await expect(this.shareAnalysisPopup).toBeVisible({ timeout: 9000 });
    }
    async SubscriptionLimitValidation(data) {

        const {
            'Patient Age': age,
            'Gender at Birth': gender,
            'Chief Complaint': complaint,
            'Detailed Symptoms': symptoms,
            'Medical History': medicalHistory,
            'Current Medications': currentMeds
        } = data;

        await this.patientAge.fill(age);
        await this.genderAtBirth.click();
        await this.page.locator('div[role="option"]', { hasText: gender }).first().click();
        await this.ChifComplaint.fill(complaint);
        await this.DetailedSymptoms.fill(symptoms);
        await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
        await this.page.waitForTimeout(3000);
        await this.MedicaHistory.fill(medicalHistory);
        await this.CurrentMedication.fill(currentMeds);
        await this.page.waitForTimeout(5000);
        await this.uploadsucesspopupclosebtn.click();
        await this.analyzeCaseBtn.click();
        await this.page.waitForTimeout(3000);
        await this.AiAnalysis.scrollIntoViewIfNeeded();
        await expect(this.AnalyzePopup).toHaveText('Analysis CompleteAI has analyzed the case.', { timeout: 120_000 });
    }
    async SubscriptionLimitAssert() {
        await expect(this.SubscriptionLimit).toBeVisible({ timeout: 9000 });
    }
}