import { expect } from '@playwright/test';
import fs from 'fs';
import{parse} from "csv-parse/sync";

const records=parse(fs.readFileSync("tests/TestData/MananTestData.csv"),{
    columns:true,
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
        this.FileUploadSuccessMsg = page.getByText('Success');
        this.MedicaHistory = page.getByPlaceholder('Relevant past medical history');
        this.CurrentMedication = page.getByPlaceholder('List current medications and dosages');

        this.analyzesuccessPopup = page.locator('div:text("Analysis Complete")'); 
        //this.analyzesuccessPopup = page.locator('//*[@id="root"]/div[2]/ol/li/div/div[1]');        

    //    this.uploadsucesspopupclosebtn = page.getByRole('region', { name: 'Notifications (F8)' }).getByRole('button')
    //     //this.uploadsucesspopupclosebtn = page.locator('//*[@id="root"]/div[2]/ol/li/button');
       
       this.analyzeCaseBtn = page.getByRole('button', { name: 'Analyze Case' });
        
        this.SuccessPopupcloseBtn = page.locator('button:has(svg.lucide-x)');
      
        this.report = page.getByText('### 1. TRIAGE LEVEL **HIGH');
      

    }

    async MananFormPage() {
         await expect (this.LoginSuccessMsg).toBeVisible();
         await expect (this.patientAge).toBeVisible();
     }

    
    async FillFormDetails() { 
            const firstRecord = records[0]; // Get only the first row
            this.age =firstRecord['Patient Age'];
            this.gender =firstRecord['Gender at Birth'];
            this.chif_complaint = firstRecord['Chief Complaint'];
            this.deatiled_symptoms= firstRecord['Detailed Symptoms'];
            this.medical_history =firstRecord['Medical History'];
            this.current_Medication = firstRecord['Current Medications'];
            await this.patientAge.fill(this.age);
            await this.genderAtBirth.click();
            await this.GenderSelectOption.first().click();
            await this.ChifComplaint.fill(this.chif_complaint);
            await this.DetailedSymptoms.fill(this.deatiled_symptoms);
            //pdf upload
            await this.fileupload.setInputFiles("tests/TestData/Blood Reports/CBC-sample 1.pdf");
            //assertion for successful upload popup
           await expect( this.FileUploadSuccessMsg).toBeVisible();



           //close popup
           // await this.uploadsucesspopupclosebtn.click();
          if (await this.SuccessPopupcloseBtn.isVisible()) {
              await this.SuccessPopupcloseBtn.click();
            }

       
           //medical history field
             await this.MedicaHistory.fill(this.medical_history);
           //current medication field
            await this.CurrentMedication.fill(this.current_Medication);

            //Analyze case button
            await this.analyzeCaseBtn.click();

                  

          // Wait for Analysis popup
        //  await expect(this.analyzesuccessPopup).toBeVisible();
         //  console.log("analyse success")

         //Assert AI Report
      
        // await  expect(this.report).toBeVisible({ timeout: 15000 });
        }
   
}  
//export{ SignInPage };