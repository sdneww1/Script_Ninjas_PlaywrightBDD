
@auth
Feature: Verify Dashboard Page

  Background:
   Given The user is authenticated and user navigated to the Manan Form page
   @auth
  Scenario: Verify that user is able to open the Dashboard Page
    When User clicks on Dashboard button
    Then User should navigate to Dashboard Page "https://manan.numpyninja.com/dashboard"