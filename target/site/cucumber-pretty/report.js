$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create An Account",
  "description": "",
  "id": "account-management;create-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters so \"\u003cFirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters a \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters their \"\u003cEmail\u003e\" Address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters that \"\u003cPassword\u003e\" on create account page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters that to confirm the \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on CreateAnAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user MyAccount page is displayed.",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 16,
      "id": "account-management;create-an-account;;1"
    },
    {
      "cells": [
        "Leather",
        "Suede",
        "suleather@hotmail.com",
        "LSrubber04",
        "LSrubber04"
      ],
      "line": 17,
      "id": "account-management;create-an-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Create An Account",
  "description": "",
  "id": "account-management;create-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters so \"Leather\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters a \"Suede\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters their \"suleather@hotmail.com\" Address",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters that \"LSrubber04\" on create account page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters that to confirm the \"LSrubber04\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on CreateAnAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user MyAccount page is displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 6277131617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leather",
      "offset": 16
    }
  ],
  "location": "AccountManagementSteps.userEntersSo(String)"
});
formatter.result({
  "duration": 502852900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suede",
      "offset": 15
    }
  ],
  "location": "AccountManagementSteps.userEntersA(String)"
});
formatter.result({
  "duration": 236766136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suleather@hotmail.com",
      "offset": 19
    }
  ],
  "location": "AccountManagementSteps.userEntersTheirAddress(String)"
});
formatter.result({
  "duration": 156772116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LSrubber04",
      "offset": 18
    }
  ],
  "location": "AccountManagementSteps.userEntersThatOnCreateAccountPage(String)"
});
formatter.result({
  "duration": 167669979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LSrubber04",
      "offset": 33
    }
  ],
  "location": "AccountManagementSteps.userEntersThatToConfirmThe(String)"
});
formatter.result({
  "duration": 153763397,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksOnCreateAnAccount()"
});
formatter.result({
  "duration": 766787292,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userMyAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 196404289,
  "status": "passed"
});
});