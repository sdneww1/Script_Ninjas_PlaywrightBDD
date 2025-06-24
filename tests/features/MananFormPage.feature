@auth
Feature: Manan app Form Page

   Background:
   Given The user is authenticated and user navigated to the Manan Form page

#   @auth
#    Scenario: Verify that user is able to view "Enter patient age" placeholder for "Patients Age" field
#       Given user is on the Manan Form Page
#       When  The user should be able to view Enter patient age placeholder for Patients Age field
#       Then   The user should see the placeholder for Patients Age field
  
   # Background: Login to Manan portal
   #    Given The user enter correct Manan portal URL
   #      When User click on Sign in button
   #      And User navigates to Sign in pop up window.
   #      And User enters valid Username and Password
   #      And the user clicks the Sign-In button on the Sign-In popup
      #   Then User should be redirected to Manan Form page

   # Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"
  @auth
   Scenario: Verify that user is able to view "Enter patient age" placeholder for "Patients Age" field
      Given user is on the Manan Form Page
      When  The user should be able to view Enter patient age placeholder for Patients Age field
      Then   The user should see the placeholder for Patients Age field

   Scenario: Verify that user is able to view "Main reason for visit" placeholder for "Chief Complaint" field
      Given user is on the Manan Form Page
      When  The user should be able to view Main reason for visit placeholder for Chief Complaint field
      Then  The user should see the placeholder for Chief Complaint field

   Scenario: Verify that user is able to view "Describe all symptoms in detail, including onset and severity" placeholder for "Detailed Symptoms" field
      Given user is on the Manan Form Page
      When The user should be able to view Describe all symptoms in detail, including onset and severity placeholder for Detailed Symptoms field
      Then The user should see the placeholder for Detailed Symptoms field

    Scenario:Verify that user is able to view "Enter vital signs (BP, HR, RR, Temp, SPO2) and any available lab results" placeholder for "Vital Signs & Lab Values" field
      Given user is on the Manan Form Page
      When The user should be able to view Enter vital signs (BP, HR, RR, Temp, SPO2) and any available lab results placeholder for Vital Signs & Lab Values field
      Then The user should see the placeholder for Vital Signs & Lab Values field

   Scenario: Verify that user is able to view "Relevant past medical history" placeholder for "Medical History" field
      Given user is on the Manan Form Page
      When The user should be able to view Relevant past medical history placeholder for Medical History field
      Then The user should see the placeholder for Medical History field

      Scenario: Verify that user is able to view "List current medications and dosages" placeholder for "Current Medications" field
      Given user is on the Manan Form Page
      When The user should be able to view List current medications and dosages placeholder for Current Medications field
      Then The user should see the placeholder for Current Medications field


   Scenario: Check the user is able to add a new patient's details Successfully
      Given user is on the Manan Form Page
      When  User Enter all deatils in the form and click on Analyze Case button
      Then  The user should able to see the detailed analysis

   @auth
   Scenario: Check the user is able to view error message on Patients Age field
      Given user is on the Manan Form Page
      When  Then User enter any of Alphabets in Age field
      Then  The user should able to view error alert Enter valid Age
   @auth
   Scenario: Check the user is able to view error message when Patients Age field is blank
      Given user is on the Manan Form Page
      When  User leave Patient Age field blank And enter other fields
      Then  The user should able to view error alert Patient age is required
  @auth
   Scenario: Verify error message for Gender at birth field is not selected
      Given user is on the Manan Form Page
      When  User does not select gender filed And enter other fields
      Then The user should able to view error alert Gender is required
    @auth
     Scenario: Verify user enters an age above the allowed limit
      Given user is on the Manan Form Page
      When  User enters higher in the age text box
      Then  The user should able to view error message Age must be below range should be displayed
   @auth
   Scenario: Verify error message for Chief Complaint field is blank
      Given user is on the Manan Form Page
      When User leave Chief Complaint field blank And enter other fields
      Then The user should able to view error alert Chief complaint is required
   @auth
   Scenario: Verify that user enter numeric value for Chief Complaint field
      Given user is on the Manan Form Page
      When User enter numbers in Chief Complaint field
      Then The user should able to  view error message enter valid data in Chief Complaint field
   @auth
   Scenario: Verify error message for Detailed Symptoms field is blank
      Given user is on the Manan Form Page
      When User leave Detailed Symptoms field blank And enter other fields
      Then The user should able to view error message  that User should enter Detailed Symptoms
   @auth
   Scenario: Verify that user enter invalid data  enter for Detailed Symptoms field
      Given user is on the Manan Form Page
      When User enter invalid data in Detailed Symptoms field
      Then The user should able to view error alert Detailed Symptoms field
   @auth
   Scenario:Verify if upload blood report button is enable
      Given user is on the Manan Form Page
      When User checks if upload blood report is enabled
      Then Upload blood report is enabled
   @auth
   Scenario: Verify  user should be able to upload blood report in pdf format only
      Given user is on the Manan Form Page
      When User is uploading pdf file only
      Then The user should be able to view the pdf file uploaded successfully
   @auth
   Scenario: Verify user should be able to upload blood report jpeg format only
   Given user is on the Manan Form Page
   When User is uploading jpeg file
   Then The user should be able to see the jpeg uploaded successfully


   Scenario: Verify user is getting error while uploading the pdf file with size more than 5MB
   Given user is on the Manan Form Page
   When User is uploading the pdf file with size more than 5MB
   Then The user should be able to see error message

   Scenario:Verify user entering reading manually in vital signs and lab values
   Given user is on the Manan Form Page
   When User enter all BP,HR,RR,Temp,SpO2 values in the field 
   Then The user should able to view the detailed analysis report

   Scenario: Verify error message for entering wrong values in vital signs and lab values
   Given user is on the Manan Form Page
   When Verify error message for entering wrong values in vital signs and lab values
   Then The user should able to view error message 

  Scenario: verify user is able to upload one or multiple reports in vital signs and lab values
   Given user is on the Manan Form Page
   When User enter more than one report in vital signs and lab values field
   Then The user should be able to view multiple reports get added

   Scenario: Verify that user enter incorrect data for medicle history field
   Given user is on the Manan Form Page
   When  User enter incorrect values in  medical history field
   Then The user should be able to see error message in medical history field

   Scenario: Verify that Analyze case button visible in Manan app page 
   Given user is on the Manan Form Page
   When User validate if  Analyze Case button should be visible in Manan app Page
   Then The user should able to see Analyze Case button in manan app Page 

   Scenario: Verify that user is able to share the analysis
   Given user is on the Manan Form Page
   When User is clicking on share analysis button
   Then The user should view pdf generated success message
 