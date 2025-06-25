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
    Scenario: Verify "Welcome to MANAN Medical Assistant." Pop up message on Manan Form Page
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters valid Username and Password
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should be redirected to Manan Form page with Welcome to MANAN Medical Assistant. Pop up Message

    @nonauth
    Scenario Outline: Verify error message for invalid Username and Password Sign IN Form
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters invalid "<Username>" and "<Password>"
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should get error message "<Error message>"

        Examples:
            | Username  | Password  | Error message             |
            |           | testuser1 | Please fill in all fields |
            | testuser1 |           | Please fill in all fields |
            |           |           | Please fill in all fields |


    @nonauth
    Scenario Outline: Verify pop up error message for invalid Username and Password Sign IN Form
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And User enters invalid "<Username>" and "<Password>"
        And the user clicks the Sign-In button on the Sign-In popup
        Then User should get pop up error message "<Error message>"

        Examples:
            | Username          | Password          | Error message |
            | madhuri@gmail.com | testuser1         | Login Failed  |
            | testuser1         | madhuri@gmail.com | Login Failed  |
            | madhuri@gmail.com | madhuri@gmail.com | Login Failed  |

    @nonauth
    Scenario: Verify navigation to Sign-Up form via 'Sign Up' button on Welcome popup window
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And The user is on the Sign In form with signup button enable
        And The user clicks on the Sign Up button
        Then The Sign Up form should be displayed


    @skip
    Scenario Outline: Verify user can register a new account using the 'Sign Up' page on the Manan Form Page.(valid data)"
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And The user clicks on the Sign Up button
        Then The Sign Up form should be displayed
        When The user enters valid "<Username>", "<Email Address>", "<Password>", and "<Confirm Password>"
        And The user clicks on Create Account
        Then User should be redirected to Manan Form page

        Examples:
            | Username    | Email Address    | Password   | Confirm Password |
            | testuser123 | test@example.com | Password1! | Password1!       |


    @skip
    Scenario Outline: Validate error messages on 'Sign Up' page for form submission"
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And The user clicks on the Sign Up button
        Then The Sign Up form should be displayed
        When The user enters invalid "<Username>", "<Email Address>", "<Password>", and "<Confirm Password>"
        And The user clicks on Create Account
        Then User should get error message "<Error message>"

        Examples:
            | Username    | Email Address    | Password   | Confirm Password | Error message             |
            |             |                  |            |                  | Please fill in all fields |
            |             | test@example.com | Password1! | Password1!       | Please fill in all fields |
            | testuser123 |                  | Password1! | Password1!       | Please fill in all fields |
            | testuser123 | test@example.com |            | Password1!       | Please fill in all fields |
            | testuser123 | test@example.com | Password1! |                  | Please fill in all fields |
            |             | test@example.com | Password1! |                  | Please fill in all fields |
            |             |                  | Password1! | Password1!       | Please fill in all fields |
            | testuser123 | test@example.com |            |                  | Please fill in all fields |
            |             | test@example.com |            | Password1!       | Please fill in all fields |
            |             | test@example.com |            |                  | Please fill in all fields |

    @skip
    Scenario: Verify user can register a new account using the 'Sign Up' page on the Manan Form Page.(valid Json data)"
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And The user clicks on the Sign Up button
        Then The Sign Up form should be displayed
        When The user enters valid json "Username", "Email Address", "Password", and "Confirm Password"
        And The user clicks on Create Account
        Then User should be redirected to Manan Form page

    @nonauth
    Scenario Outline: Verify user gets validation error for invalid sign-up data from JSON
        Given The user enter correct Manan portal URL
        When User click on Sign in button
        And User navigates to Sign in pop up window.
        And The user clicks on the Sign Up button
        Then The Sign Up form should be displayed
        When The user enters invalid json data at index <index>
        And The user clicks on Create Account
        Then User should get error message "Please fill in all fields"

        Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |
            | 3     |
            | 4     |
            | 5     |
            | 6     |
            | 7     |
            | 8     |
            | 9     |
            | 10    |
            | 11    |

    # @nonauth
    # Scenario Outline: Verify pop up error message for already register Username Email Password and Confirm Password in Sign Up form
    #     Given The user enter correct Manan portal URL
    #     When User click on Sign in button
    #     And User navigates to Sign in pop up window.
    #     When The user enters invalid json "Username", "Email Address", "Password", and "Confirm Password"
    #     And the user clicks the Sign-In button on the Sign-In popup
    #     Then User should get pop up error message "<Error message>"

    #     Examples:
    #         | Username   | Email                | Password     | Confirm Password | Error message       |
    #         | testuser1  | testuser21@gmail.com | testuser1    | testuser1        | Registration Failed |
    #         | testuser21 | testuser1@gmail.com  | testuser1    | testuser1        | Registration Failed |
    #         | testuser21 | testuser21@gmail.com | testuser@123 | testuser@123     | Registration Failed |

    # @nonauth
    # Scenario Outline: Verify pop up error message for mismatch Password and Confirm Password in Sign Up form
    #     Given The user enter correct Manan portal URL
    #     When User click on Sign in button
    #     And User navigates to Sign in pop up window.
    #     When The user enters invalid json "Username", "Email Address", "Password", and "Confirm Password"
    #     And the user clicks the Sign-In button on the Sign-In popup
    #     Then User should get pop up error message "<Error message>"
    #     Examples:
    #         | Username   | Email               | Password  | Confirm Password | Error message          |
    #         | testuser1  | testuser1@gmail.com | testuser1 | testuser2        | Passwords do not match |
    #         | testuser21 | testuser1@gmail.com | testuser2 | testuser1        | Passwords do not match |

    # Scenario Outline: Verify alert error message for Emailaddres field in Sign Up form
    #     Given The user enter correct Manan portal URL
    #     When User click on Sign in button
    #     And User navigates to Sign in pop up window.
    #     When The user enters invalid json "Username", "Email Address", "Password", and "Confirm Password"
    #     And the user clicks the Sign-In button on the Sign-In popup
    #     Then User should get alert error message "Error message"
    #     Examples:
    #         | Username   | Email    | Password  | Confirm Password |
    #         | testuser1  | testting | testuser1 | testuser2        |
    #         | testuser21 | 12345    | testuser2 | testuser1        |
#------------------------------------------------------------------------------


# @noauth
# Scenario: Verify navigation to Manan Form Page via "Pricing Link" with authentication
# Given The user enter correct Manan portal URL
# When User click on Pricing link
# Then User should navigate to Subscription Page


# Scenario: Verify "View Pricing Plans" button on Manan Home Page.
# Given The user enter correct Manan portal URL
# When User click on View Pricing Plans button
# Then User should navigate to Manan Form Page

# @nonauth
# Scenario: Verify user can register a new account using the 'Sign Up' page on the Manan Form Page.(invalid Json data)"
#     Given The user enter correct Manan portal URL
#     When User click on Sign in button
#     And User navigates to Sign in pop up window.
#     And The user clicks on the Sign Up button
#     Then The Sign Up form should be displayed
#     When The user enters invalid json "Username", "Email Address", "Password", and "Confirm Password"
#     And The user clicks on Create Account
#     Then User should get error message "Please fill in all fields"