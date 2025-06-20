
# Feature: SignIn and SignUp validation for Manan Portal
#     @nonauth
    # Scenario: Verify User is able to navigate to Manan Form Page after Sinn IN
    #     Given The user enters the correct Manan portal URL
    #     When The user clicks on the Sign-In button
    #     Then The Sign-In popup window should appear
    #     When The user enters a valid username and password
    #     And The user clicks on the Sign-In button on Pop up Sign In Window
    #     Then The user should be redirected to the Manan Form Page

#     @nonauth
#     Scenario Outline: Verify error message for invalid Username and Password
#         Given The user enter correct Manan portal URL
#         When The user should be able to land on Manan portal with Title "Medical Triage Assistant"
#         And User click on Sign in button
#         Then User should navingate to Sign in pop up window.
#         When When User enters valid "<Username>" and "<Password>"
#         And User click on SignIn button
#         Then User should get error message "<Error message>"

#         Examples:
#             | Username  | Password  | Error message             |
#             |           | testuser1 | Please fill in all fields |
#             | testuser1 |           | Please fill in all fields |
#             |           |           | Please fill in all fields |
