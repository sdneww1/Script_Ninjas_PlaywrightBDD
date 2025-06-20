Feature: Manan app Form Page 

Background: Login to Manan portal
        Given The user enter correct Manan portal URL
        And User Click on Sign in button
        When When User enters valid Email Address and Password
        And User click on SignIn button
        
       # Then Then User should be redirected to Manan App page "https://manan.numpyninja.com/app"

  Scenario: Check the user is able to add a new patient's details Successfully
    Given : user is on the Manan Form Page
    When : User Enter all deatils in the form and click on 'Analyze Case' button
    #Then : The user should able to see the detailed analysis 
