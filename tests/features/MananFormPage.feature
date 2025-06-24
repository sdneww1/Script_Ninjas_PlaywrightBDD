@auth
Feature: Manan app Form Page

Background:
   Given The user is authenticated and user navigated to the Manan Form page

#   @auth
#    Scenario: Verify that user is able to view "Enter patient age" placeholder for "Patients Age" field
#       Given user is on the Manan Form Page
#       When  The user should be able to view Enter patient age placeholder for Patients Age field
#       Then   The user should see the placeholder for Patients Age field
  
   Scenario: Check the user is able to add a new patient's details Successfully
      Given user is on the Manan Form Page
      When  User Enter all deatils in the form and click on Analyze Case button
      Then  The user should able to see the detailed analysis

#    @auth
#    Scenario: Check the user is able to view error message on Patients Age field
#       Given user is on the Manan Form Page
#       When  Then User enter any of Alphabets in Age field
#       Then  The user should able to view error alert Enter valid Age
#    @auth
#    Scenario: Check the user is able to view error message when Patients Age field is blank
#       Given user is on the Manan Form Page
#       When  User leave Patient Age field blank And enter other fields
#       Then  The user should able to view error alert Patient age is required
#   @auth
#    Scenario: Verify error message for Gender at birth field is not selected
#       Given user is on the Manan Form Page
#       When  User does not select gender filed And enter other fields
#       Then The user should able to view error alert Gender is required
#     @auth
#      Scenario: Verify user enters an age above the allowed limit
#       Given user is on the Manan Form Page
#       When  User enters higher in the age text box
#       Then  The user should able to view error message Age must be below range should be displayed
#    @auth
#    Scenario: Verify error message for Chief Complaint field is blank
#       Given user is on the Manan Form Page
#       When User leave Chief Complaint field blank And enter other fields
#       Then The user should able to view error alert Chief complaint is required
#    @auth
#    Scenario: Verify that user enter numeric value for Chief Complaint field
#       Given user is on the Manan Form Page
#       When User enter numbers in Chief Complaint field
#       Then The user should able to  view error message enter valid data in Chief Complaint field
#    @auth
#    Scenario: Verify error message for Detailed Symptoms field is blank
#       Given user is on the Manan Form Page
#       When User leave Detailed Symptoms field blank And enter other fields
#       Then The user should able to view error message  that User should enter Detailed Symptoms
#    @auth
#    Scenario: Verify that user enter invalid data  enter for Detailed Symptoms field
#       Given user is on the Manan Form Page
#       When User enter invalid data in Detailed Symptoms field
#       Then The user should able to view error alert Detailed Symptoms field
#    @auth
#    Scenario:Verify if upload blood report button is enable
#       Given user is on the Manan Form Page
#       When User checks if upload blood report is enabled
#       Then Upload blood report is enabled
#    @auth
#    Scenario: Verify  user should be able to upload blood report in pdf format only
#       Given user is on the Manan Form Page
#       When User is uploading pdf file only
#       Then The user should be able to view the pdf file uploaded successfully
#    @auth
#    Scenario: Verify user should be able to upload blood report jpeg format only
#    Given user is on the Manan Form Page
#    When User is uploading jpeg file
#    Then The user should be able to see the jpeg uploaded successfully