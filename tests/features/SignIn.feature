Feature: SignIn validation feature for Manan Portal

    Feature Description
Scenario: Verify User is able to navigate to Manan Application Page
Given The user enter correct Manan portal URL "https://manan.numpyninja.com"
When The user should be able to land on Manan portal with Title "Medical Triage Assistant"
And User Click on Sign in button
Then User should navingate to Sign in pop up window.
When When User enters valid username "NewSdetuser2" and valid password "Abcd1234!"
And User click on SignIn button
Then Then User should be redirected to Manan App page 


