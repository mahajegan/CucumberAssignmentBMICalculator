
Feature: Login

  @testcase1
  Scenario: Go to AutomationPractice Page
    Given  The user is on the homepage
    When The user taps on login
    When Enters username and Password
    Then Should show successful login
    