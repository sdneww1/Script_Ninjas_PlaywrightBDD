Feature: Manan Form Page Access via Home Page with Authentication

    @nonauth
    Scenario: Verify navigation to Manan Form Page via 'Try Now' link with authentication
        Given The user enter correct Manan portal URL
        When User click on Try Now Link
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page


    @nonauth
    Scenario: Verify navigation to Manan Form Page via 'Try for free' button with authentication
        Given The user enter correct Manan portal URL
        When User click on Try for free button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page

    @nonauth
    Scenario: Verify navigation to Manan Form Page via 'For Medical Professionals' button with authentication
        Given The user enter correct Manan portal URL
        When User click on For Medical Professionals button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page

    @nonauth
    Scenario: Verify navigation to Manan Form Page via 'Start Medical Triage Assessment' button with authentication
        Given The user enter correct Manan portal URL
        When User click on Start Medical Triage Assessment button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page


    @nonauth
    Scenario: Verify Manan form Page for Valid Username and Password
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page

    @nonauth
    Scenario: Verify "Registration Successful" Pop up on Manan Form Message
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page with Registration Successful Pop up

    @nonauth
    Scenario: Verify ""Welcome to MANAN Medical Assistant." Pop up message on Manan Form Page
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page with Welcome to MANAN Medical Assistant. Pop up Message

    @nonauth
    Scenario Outline: Verify error message for invalid Username and Password
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid "<Username>" and "<Password>"
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should get error message "<Error message>"

        Examples:
            | Username  | Password  | Error message             |
            |           | testuser1 | Please fill in all fields |
            | testuser1 |           | Please fill in all fields |
            |           |           | Please fill in all fields |


    @nonauth
    Scenario Outline: Verify pop up error message for invalid Username and Password
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid "<Username>" and "<Password>"
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should get pop up error message "<Error message>"

        Examples:
            | Username          | Password          | Error message |
            | madhuri@gmail.com | testuser1         | Login Failed  |
            | testuser1         | madhuri@gmail.com | Login Failed  |
            | madhuri@gmail.com | madhuri@gmail.com | Login Failed  |


    # @nonauth
    # Scenario Outline: Verify navigation to Sign-Up form via 'Sign Up' button on Welcome popup window
    #     Given The user enter correct Manan portal URL
    #     When User click on Sign in button
    #     And User navigates to Sign in pop up window.


#---------------------------------

# @noauth
# Scenario: Verify navigation to Manan Form Page via "Pricing Link" with authentication
# Given The user enter correct Manan portal URL
# When User click on Pricing link
# Then User should navigate to Subscription Page


# Scenario: Verify "View Pricing Plans" button on Manan Home Page.
# Given The user enter correct Manan portal URL
# When User click on View Pricing Plans button
# Then User should navigate to Manan Form Page