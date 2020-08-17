$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn.feature");
formatter.feature({
  "line": 2,
  "name": "Account Login",
  "description": "",
  "id": "account-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer Log into account",
  "description": "",
  "id": "account-login;customer-log-into-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "customer is on Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer inputs \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters that \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click the Sign In link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer MyDashboard page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "account-login;customer-log-into-account;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 12,
      "id": "account-login;customer-log-into-account;;1"
    },
    {
      "cells": [
        "suleather@hotmail.com",
        "LSrubber04"
      ],
      "line": 13,
      "id": "account-login;customer-log-into-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Customer Log into account",
  "description": "",
  "id": "account-login;customer-log-into-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LogIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer inputs \"suleather@hotmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters that \"LSrubber04\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click the Sign In link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer MyDashboard page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInSteps.customerIsOnSignInPage()"
});
formatter.result({
  "duration": 4508249020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suleather@hotmail.com",
      "offset": 17
    }
  ],
  "location": "LogInSteps.customerInputs(String)"
});
formatter.result({
  "duration": 424415840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LSrubber04",
      "offset": 18
    }
  ],
  "location": "LogInSteps.userEntersThat(String)"
});
formatter.result({
  "duration": 103756555,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.customerClickTheSignInLink()"
});
formatter.result({
  "duration": 874449233,
  "status": "passed"
});
formatter.match({
  "location": "LogInSteps.customerMyDashboardPageIsDisplayed()"
});
formatter.result({
  "duration": 234109637,
  "status": "passed"
});
});