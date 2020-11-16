$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/assignment.feature");
formatter.feature({
  "line": 2,
  "name": "Calculate BMI",
  "description": "",
  "id": "calculate-bmi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"\u003cage\u003e\", Height \"\u003cheight\u003e\", Weight \"\u003cweight\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 15,
      "id": "calculate-bmi;calculation-of-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 16,
      "id": "calculate-bmi;calculation-of-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 17,
      "id": "calculate-bmi;calculation-of-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 18,
      "id": "calculate-bmi;calculation-of-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 19,
      "id": "calculate-bmi;calculation-of-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 20,
      "id": "calculate-bmi;calculation-of-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"10\", Height \"127\", Weight \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.i_open_the_Calculator_Net_URL()"
});
formatter.result({
  "duration": 12142083400,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_BMI_Calculator_Link()"
});
formatter.result({
  "duration": 3237743000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "127",
      "offset": 26
    },
    {
      "val": "40",
      "offset": 40
    }
  ],
  "location": "AssignmentStepDefinition.i_Enter_Age_Height_Weight(String,String,String)"
});
formatter.result({
  "duration": 1249090200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_button()"
});
formatter.result({
  "duration": 661816700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_validate_the_BMI_Result()"
});
formatter.result({
  "duration": 279774000,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1255130400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"30\", Height \"156\", Weight \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.i_open_the_Calculator_Net_URL()"
});
formatter.result({
  "duration": 9168833100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_BMI_Calculator_Link()"
});
formatter.result({
  "duration": 2851494600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 13
    },
    {
      "val": "156",
      "offset": 26
    },
    {
      "val": "70",
      "offset": 40
    }
  ],
  "location": "AssignmentStepDefinition.i_Enter_Age_Height_Weight(String,String,String)"
});
formatter.result({
  "duration": 2277097100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_button()"
});
formatter.result({
  "duration": 679182100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_validate_the_BMI_Result()"
});
formatter.result({
  "duration": 333090500,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1270170700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"25\", Height \"152\", Weight \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.i_open_the_Calculator_Net_URL()"
});
formatter.result({
  "duration": 8578176800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_BMI_Calculator_Link()"
});
formatter.result({
  "duration": 5349485200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    },
    {
      "val": "152",
      "offset": 26
    },
    {
      "val": "55",
      "offset": 40
    }
  ],
  "location": "AssignmentStepDefinition.i_Enter_Age_Height_Weight(String,String,String)"
});
formatter.result({
  "duration": 708968300,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_button()"
});
formatter.result({
  "duration": 634712000,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_validate_the_BMI_Result()"
});
formatter.result({
  "duration": 247722400,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1310774500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"20\", Height \"160\", Weight \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.i_open_the_Calculator_Net_URL()"
});
formatter.result({
  "duration": 8111099200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_BMI_Calculator_Link()"
});
formatter.result({
  "duration": 3244784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 26
    },
    {
      "val": "45",
      "offset": 40
    }
  ],
  "location": "AssignmentStepDefinition.i_Enter_Age_Height_Weight(String,String,String)"
});
formatter.result({
  "duration": 1103103100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_button()"
});
formatter.result({
  "duration": 514794300,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_validate_the_BMI_Result()"
});
formatter.result({
  "duration": 248463700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1729145200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Calculation of BMI",
  "description": "",
  "id": "calculate-bmi;calculation-of-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open the Calculator.Net URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Enter Age \"35\", Height \"160\", Weight \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the BMI Result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.i_open_the_Calculator_Net_URL()"
});
formatter.result({
  "duration": 9596112600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_BMI_Calculator_Link()"
});
formatter.result({
  "duration": 4961001200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 13
    },
    {
      "val": "160",
      "offset": 26
    },
    {
      "val": "70",
      "offset": 40
    }
  ],
  "location": "AssignmentStepDefinition.i_Enter_Age_Height_Weight(String,String,String)"
});
formatter.result({
  "duration": 1773201000,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_button()"
});
formatter.result({
  "duration": 2555510100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_validate_the_BMI_Result()"
});
formatter.result({
  "duration": 748927100,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1345560400,
  "status": "passed"
});
});