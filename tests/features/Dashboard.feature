Feature: Dashboard Functionality

    # Background: Login to Manan portal
    #     Given The user enter correct Manan portal URL
    #     And User Click on Sign in button
    #     When When User enters valid Email Address and Password
    #     And User click on SignIn button
    #     Then Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"

    # Background:
        # Given The user is authenticated and on the Manan App page "https://manan.numpyninja.com/app"

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

    Scenario: Verify that the user is able to navigate to Manan page after clicking "Start your first assessment" link under "Recent Assessments" in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks on Start your first assessment link under Recent Assessments in the Dashboard page
        Then The user is navigated to the Manan page

    Scenario: Verify that the user is able to navigate to "Previous Assessments" page after clicking "View history" link in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks View history link in the Dashboard page
        Then The user is navigated to the Previous Assessments page

    Scenario: Verify that the user is able to navigate to "Subscription plans" page after clicking "Upgrade Now" link in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks Upgrade Now link in the Dashboard page
        Then The user is navigated to the Subscription plans page

    Scenario: Verify that the user is able to navigate to "Account Settings" page after clicking "Update Settings" link in the Dashboard page
        Given The user is in the Dashboard page
        When The user clicks Update Settings link in the Dashboard page
        Then The user is navigated to the Account Settings page

    # Scenario: Verify that the user is able to navigate to "Subscription plans" page after clicking "Upgrade to Premium" button under "Usage Statistics" in the Dashboard page
    #     Given The user is in the Dashboard page
    #     When The user clicks Upgrade to Premium button under Usage Statistics in the Dashboard page
    #     Then The user is navigated to the Subscription plans page

    Scenario: Verify that the user is able to view "Upgrade to Premium" option when the user is haivng "Current Plan" as "Free" in the Subscription Plans page
        Given The user is in the Subscription Plans page
        Then The user is able to view Upgrade to Premium option when Current Plan is Free

    Scenario: Verify that the user is able to click "Upgrade to Premium" in the Subscription Plans page
        Given The user is in the Subscription Plans page
        When The user clicks Upgrade to Premium button in the Subscription Plans page
        Then The user is navigated to payment page

    Scenario: Verify that the user is able to click "Subscribe Now" in the Subscription Plans page
        Given The user is in the Subscription Plans page
        When The user clicks Subscribe Now button in the Subscription Plans page
        Then The user is navigated to payment page

    # Scenario: Verify that the user is able to view the user "email ID" in the payment page
    #     Given The user is in the Payments page
    #     Then The user is able to view the user email ID in the payment page

    Scenario: Verify that the error message is displayed when all the mandatory fields are blank
        Given The user is in the Payments page
        When The user clicks Subscribe button with blank mandatory fields
        Then The error message is displayed in the Payments page

    # Scenario: Verify that the user is able to enter "Card Number" for "Card Information" in the payments page
    #     Given The user is in the Payments page
    #     When The user enters Card Number in the payments page
    #     Then The user is able to enter Card Number in the payments page

# Scenario: Verify that the user is able to enter "Month and Year" for "Card Information" in the payments page
# Given The user is in the Payments page
# When The user enters Month and Year in the payments page
# Then The user is able to enter Month and Year in the payments page

# Scenario: Verify that the user is able to enter "CVC" for "Card Information" in the payments page
# Given The user is in the Payments page
# When The user enters CVC in the payments page
# Then The user is able to enter CVC in the payments page

# Scenario: Verify that the user is able to enter "Cardholder Name" for "Card Information" in the payments page
# Given The user is in the Payments page
# When The user enters Cardholder Name in the payments page
# Then The user is able to enter Cardholder Name in the payments page

# Scenario: Verify that the user is able to choose "Country or Region" from dropdown options in the payments page
# Given The user is in the Payments page
# When The user choose Country or Region from dropdown options in the payments page
# Then The user is able to choose Country or Region from dropdown options in the payments page

# Scenario: Verify that the user is able to enter "Postal Code" in the payments page
# Given The user is in the Payments page
# When The user enters Postal Code in the payments page
# Then The user is able to enter Postal Code in the payments page








Scenario: Verify that the user is able view the "Profile Icon" in the Dashboard page
    Given The user is in the Dashboard page
    Then The user is able view the Profile Icon in the Dashboard page

Scenario: Verify that the user is able to view the dropdown options after clicking the profile icon
    Given The user is in the Dashboard page
    When The user clicks the profile icon
    Then The user is able to view the dropdown options

Scenario: Verify that the user is able to view "Username and email ID" in the dropdown options after clicking the profile icon
    Given The user is in the Profile Icon page
    Then The user is able to view Username and email ID

Scenario: Verify that the user is able to view "Settings" in the dropdown options after clicking the profile icon
    Given The user is in the Profile Icon page
    Then The user is able to view Settings in the dropdown options

Scenario: Verify that the user is able to view "Previous Assessments" in the dropdown options after clicking the profile icon
    Given The user is in the Profile Icon page
    Then The user is able to view Previous Assessments in the dropdown options

Scenario: Verify that the user is able to view "Subscription Plans" in the dropdown options after clicking the profile icon
    Given The user is in the Profile Icon page
    Then The user is able to view Subscription Plans in the dropdown options

Scenario: Verify that the user is able to view "Log out" in the dropdown options after clicking the profile icon
    Given The user is in the Profile Icon page
    Then The user is able to view Log out in the dropdown options

Scenario: Verify that the user is navigated to "Previous Assessments" page after clicking "Previous Assessments" in the profile icon
    Given The user is in the Profile Icon page
    When The user clicks Previous Assessments in the profile icon
    Then The user is navigated to the Previous Assessments page

Scenario: Verify that the user is navigated to "Subscription Plans" page after clicking "Subscription Plans" in the profile icon
    Given The user is in the Profile Icon page
    When The user clicks Subscription Plans in the profile icon
    Then The user is navigated to the Subscription plans page

Scenario: Verify that the user is navigated to "Settings" page after clicking "Settings" in the profile icon
    Given The user is in the Profile Icon page
    When The user clicks Settings in the profile icon
    Then The user is navigated to the Account Settings page

Scenario: Verify that the user is able to view "User Profile - Your account information" in the "Settings" page
    Given The user is in the Setting page
    Then The user is able to view User Profile - Your account information in the Settings page

Scenario: Verify that the user is able to view "Username and email ID" under "User Profile" in the "Settings" page
    Given The user is in the Setting page
    Then The user is able to view Username and email ID under User Profile in the Settings page

Scenario: Verify that the user is able to view "Notification Preferences - Manage how you receive notifications" in the "Settings" page
    Given The user is in the Setting page
    Then The user is able to view Notification Preferences - Manage how you receive notifications in the Settings page

Scenario: Verify that the user is able to view "Email Notifications - Receive case analysis updates via email" in the "Settings" page
    Given The user is in the Setting page
    Then The user is able to view Email Notifications - Receive case analysis updates via email in the Settings page

Scenario: Verify that the user is able to view "App Notifications - Receive in-app notifications and alerts" in the "Settings" page
    Given The user is in the Setting page
    Then The user is able to view App Notifications - Receive in-app notifications and alerts in the Settings page

Scenario: Verify that the user is able to uncheck "Email Notifications" in the "Settings" page
    Given The user is in the Setting page
    When The user should be able to uncheck Email Notifications in the Settings page
    Then The user is able to uncheck Email Notifications in the Settings page

Scenario: Verify that the user is able to check "Email Notifications" in the "Settings" page
    Given The user is in the Setting page
    When The user should be able to check Email Notifications in the Settings page
    Then The user is able to check Email Notifications in the Settings page

Scenario: Verify that the user is able to uncheck "App Notifications" in the "Settings" page
    Given The user is in the Setting page
    When The user should be able to uncheck App Notifications in the Settings page
    Then The user is able to uncheck App Notifications in the Settings page

Scenario: Verify that the user is able to check "App Notifications" in the "Settings" page
    Given The user is in the Setting page
    When The user should be able to check App Notifications in the Settings page
    Then The user is able to check App Notifications in the Settings page

Scenario: Verify that the user is able to save the changes after clicking "Save Changes" in the "Setting" page
    Given The user is in the Setting page
    When The user should be able to save the changes after clicking Save Changes in the Setting page
    Then The user is able to view the success message Success - Your notification preferences have been updated


# SUPRIYA DAshboard Feature

#     @auth
# Feature: Verify Dashboard Page

#   Background:
#    Given The user is authenticated and user navigated to the Manan Form page
#    @auth
#   Scenario: Verify that user is able to open the Dashboard Page
#     When User clicks on Dashboard button
#     Then User should navigate to Dashboard Page "https://manan.numpyninja.com/dashboard"