@LogIn
Feature: Account Login

  Scenario Outline: Customer Log into account
    Given customer is on Sign In Page
    When customer inputs "<Email>"
    And user enters that "<Password>"
    And customer click the Sign In link
    Then customer MyDashboard page is displayed

    Examples:
      | Email                 | Password   |
      | suleather@hotmail.com | LSrubber04 |