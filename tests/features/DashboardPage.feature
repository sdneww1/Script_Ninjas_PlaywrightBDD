# Feature: Verify Dashboard page

# Scenario: Verify that user is able to open the Dashboard Page

#  Given The user enter correct Manan portal URL
#         When The user should be able to land on Manan portal with Title "Medical Triage Assistant"
#          User Click on Sign in button
#         # Then User should navingate to Sign in pop up window.
#         # When When User enters valid Email Address and Password
#         # And User click on SignIn button
#         And Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"
# # Given The user enter correct Manan portal URL
# # Then The user should be able to land on Manan portal with Title "Medical Triage Assistant"
# # And User Click on Sign in button
# # Then Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"
# When User Click on Dashboard button 
# Then User should navigate to dashboard Page "*/dashboard".

Feature: Verify Dashboard Page

  Background:
    Given The user is authenticated and on the Manan App page "https://manan.numpyninja.com/app"

  Scenario: Verify that user is able to open the Dashboard Page
    When User clicks on Dashboard button
    Then User should navigate to Dashboard Page "https://manan.numpyninja.com/dashboard"
