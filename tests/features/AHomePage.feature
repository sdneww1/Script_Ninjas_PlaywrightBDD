
Feature: Manan Portal Home Page without authentication
@nonauth
Scenario: Verify that user is able to open the Manan Portal
Given The user enter correct Manan portal URL
Then The user should be able to land on Manan portal with Title "Medical Triage Assistant"

@nonauth   
Scenario: Verify Sign-In popup for 'Sign In' button without authentication
Given The user enter correct Manan portal URL
When User click on Sign in button
Then User should navigate to Sign in pop up window.

@nonauth
Scenario: Verify Sign-In popup for 'Try Now' Link without authentication
Given The user enter correct Manan portal URL
When User click on Try Now Link
Then User should navigate to Sign in pop up window.

@nonauth
Scenario: Verify Subscription page for 'Pricing' Link without authentication
Given The user enter correct Manan portal URL
When User click on Pricing Link
Then User should navigate to Subscription Page

@nonauth
Scenario: Verify Sign-In popup for 'Try for free' button without authentication 
Given The user enter correct Manan portal URL
When User click on Try for free button
Then User should navigate to Sign in pop up window.

@nonauth
Scenario: Verify Sign-In popup 'For Medical Professionals' button without authentication
Given The user enter correct Manan portal URL
When User click on For Medical Professionals button
Then User should navigate to Sign in pop up window.

@nonauth
Scenario: Verify Sign-In popup for 'Start Medical Triage Assessment' button without authentication
Given The user enter correct Manan portal URL
When User click on Start Medical Triage Assessment button
Then User should navigate to Sign in pop up window.

@nonauth
Scenario: Verify Subscription page for 'View Pricing Plans' button without authentication 
Given The user enter correct Manan portal URL
When User click on View Pricing Plans button
Then User should navigate to Subscription Page

@nonauth
Scenario: Verify that the 'About Us' link is accessible on the Manan Home Page without authentication.
Given The user enter correct Manan portal URL
When The user click on About us link which is present bottom of the page below the company heading.
Then The user should navigate to NumpyNinja-LifeChanging Products About Us Page.

@nonauth
Scenario: Verify that the 'Blog' link is accessible on the Manan Home Page without authentication.
Given The user enter correct Manan portal URL
When The user click on Blog link which is present bottom of the page below the company heading.
Then The user should navigate to NumpyNinja-LifeChanging Products Blog Page.

@nonauth
Scenario: Verify that the 'Contac Us' link is accessible on the Manan Home Page without authentication.
Given The user enter correct Manan portal URL
When The user click on Contact Us link which is present bottom of the page below the company heading.
Then The user should navigate to NumpyNinja Contact Us Page.