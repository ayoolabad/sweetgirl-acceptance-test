@AccountManagement
Feature: Account Management

  Scenario Outline: Create An Account
    Given user is on create an account page
    When user enters so "<FirstName>"
    And user enters a "<LastName>"
    And user enters their "<Email>" Address
    And user enters that "<Password>" on create account page
    And user enters that to confirm the "<ConfirmPassword>"
    And user clicks on CreateAnAccount
    Then user MyAccount page is displayed.


    Examples:
      | FirstName | LastName | Email                 | Password   | ConfirmPassword |
      | Leather   | Suede    | suleather@hotmail.com | LSrubber04 | LSrubber04      |