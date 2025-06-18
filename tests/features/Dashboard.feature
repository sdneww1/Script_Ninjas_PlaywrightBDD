Feature: Dashboard Functionality

    Background: Login to Manan portal
        Given The user enter correct Manan portal URL
        And User Click on Sign in button
        When When User enters valid Email Address and Password
        And User click on SignIn button
        Then Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"

    Scenario: Verify that the user is able to navigate to Dashboard page after clicking Dashboard button in the Manan page
        When The user clicks on Dashboard button in the Manan page
        Then The user is able to view the title "Welcome to Your Medical Dashboard" in the Dashboard page

    Scenario: Verify that the user is able to view "Start New Assessment" button in the Dashboard page
        Given The user is in the Dashboard page
        Then The user is able to view Start New Assessment button in the Dashboard page

    Scenario: Verify that the user is able to click "Start New Assessment" button in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks Start New Assessment button in the Dashboard page
        Then The user is navigated to the Manan page

    Scenario: Verify that the user is able to view "View Previous Assessments" button in the Dashboard page
        Given The user is in the Dashboard page
        Then The user is able to view the button in the Dashboard page
    
    Scenario: Verify that the user is able to click "View Previous Assessments" button in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks View Previous Assessments button in the Dashboard page
        Then The user is navigated to the Previous Assessments page

    # -----------Failing because "Previous Assessments" are present
    # Scenario: Verify that the user is able to view "No assessments found" in the Previous Assessments page when there are no records
    #     Given The user is in the Previous Assessments page
    #     Then The user is able to view No assessments found in the Previous Assessments page
    
    # -----------Failing because "Previous Assessments" are present
    # Scenario: Verify that the user is able to click "Start a New Assessment" button in the Previous Assessments page
    #     Given The user is in the Previous Assessments page
    #     When The user clicks Start a New Assessment button in the Previous Assessments page
    #     Then The user is navigated to the Manan page

    Scenario: Verify that the user is able to view "Your Assessments" in the Previous Assessments page when there are records present
        Given The user is in the Previous Assessments page
        Then The user is able to view Your Assessments in the Previous Assessments page

    Scenario: Verify that the user is able to view two tabs "Assessment" and "Case Details" after clicking one of the previous assessments
        Given The user is in the Previous Assessments page
        Then The user is able to view the two tabs in the previous assessments

    Scenario: Verify that the user is able to view "Assessment" tab after selecting the assessment 
        Given The user is in the Previous Assessments page
        Then The user is able to view Assessment tab after selecting the assessment 

    Scenario: Verify that the user is able to view "Case Details" after clicking "Case Details" tab in the Previous Assessments page
        Given The user is in the Previous Assessments page
        When The user clicks Case Details tab in the Previous Assessments page
        Then The user is able to view Case Details tab in the Previous Assessments page

    Scenario: Verify that the user is able to choose anyone of the assessment when multiple assessments are present
        Given The user is in the Previous Assessments page
        When The user clicks on anyone of the assessment when multiple assessments are present
        Then The user is able to view the selected assessment when multiple assessments are present

    Scenario: Verify that the user is able to export the assessment details in to a pdf file after clicking "Export as PDF"
        Given The user is in the Previous Assessments page
        When The user clicks on Export as PDF button 
        Then The user is able to export the assessment details in to a pdf file