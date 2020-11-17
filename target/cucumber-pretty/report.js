$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/assignment.feature");
formatter.feature({
  "line": 1,
  "name": "Assignment BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input \u003cAge\u003e \u003cHeight\u003e \u003cWeight\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 17,
      "id": "assignment-bmi-calculator;bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 18,
      "id": "assignment-bmi-calculator;bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 19,
      "id": "assignment-bmi-calculator;bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 20,
      "id": "assignment-bmi-calculator;bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 21,
      "id": "assignment-bmi-calculator;bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 22,
      "id": "assignment-bmi-calculator;bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input 10 127 40",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.open_the_Online_Calculator_URL()"
});
formatter.result({
  "duration": 10030802600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.the_page_loads()"
});
formatter.result({
  "duration": 32810600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 34042700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_click_on_BMI_calculator_link()"
});
formatter.result({
  "duration": 1973992200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_reach_the_BMI_calculator_page()"
});
formatter.result({
  "duration": 9979300,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page_again()"
});
formatter.result({
  "duration": 5421400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 6
    },
    {
      "val": "127",
      "offset": 9
    },
    {
      "val": "40",
      "offset": 13
    }
  ],
  "location": "AssignmentStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 1259568600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 792330800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.capture_the_BMI_Value_and_Print_it()"
});
formatter.result({
  "duration": 60783800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1178171400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input 30 156 70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.open_the_Online_Calculator_URL()"
});
formatter.result({
  "duration": 7847008000,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.the_page_loads()"
});
formatter.result({
  "duration": 7380600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 9188300,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_click_on_BMI_calculator_link()"
});
formatter.result({
  "duration": 1607526000,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_reach_the_BMI_calculator_page()"
});
formatter.result({
  "duration": 6859700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page_again()"
});
formatter.result({
  "duration": 4421100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 6
    },
    {
      "val": "156",
      "offset": 9
    },
    {
      "val": "70",
      "offset": 13
    }
  ],
  "location": "AssignmentStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 1239331900,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 836531200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.capture_the_BMI_Value_and_Print_it()"
});
formatter.result({
  "duration": 50432500,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1077995000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input 25 152 55",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.open_the_Online_Calculator_URL()"
});
formatter.result({
  "duration": 7952897700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.the_page_loads()"
});
formatter.result({
  "duration": 8816200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 12162800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_click_on_BMI_calculator_link()"
});
formatter.result({
  "duration": 1534436700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_reach_the_BMI_calculator_page()"
});
formatter.result({
  "duration": 5799500,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page_again()"
});
formatter.result({
  "duration": 11306800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 6
    },
    {
      "val": "152",
      "offset": 9
    },
    {
      "val": "55",
      "offset": 13
    }
  ],
  "location": "AssignmentStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 1305505800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 826293800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.capture_the_BMI_Value_and_Print_it()"
});
formatter.result({
  "duration": 61378700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1679427700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input 20 160 45",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.open_the_Online_Calculator_URL()"
});
formatter.result({
  "duration": 7671602700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.the_page_loads()"
});
formatter.result({
  "duration": 10936200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 5975600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_click_on_BMI_calculator_link()"
});
formatter.result({
  "duration": 1520103800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_reach_the_BMI_calculator_page()"
});
formatter.result({
  "duration": 7559200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page_again()"
});
formatter.result({
  "duration": 3940800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 6
    },
    {
      "val": "160",
      "offset": 9
    },
    {
      "val": "45",
      "offset": 13
    }
  ],
  "location": "AssignmentStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 724155800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 905180200,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.capture_the_BMI_Value_and_Print_it()"
});
formatter.result({
  "duration": 49760400,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1137409300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "BMI Calculator",
  "description": "",
  "id": "assignment-bmi-calculator;bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Online Calculator URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The page loads",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on BMI calculator link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I reach the BMI calculator page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validate the title of the page again",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Input 35 160 70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on Calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Capture the BMI Value and Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AssignmentStepDefinition.open_the_Online_Calculator_URL()"
});
formatter.result({
  "duration": 7812097800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.the_page_loads()"
});
formatter.result({
  "duration": 7622700,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 9318400,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_click_on_BMI_calculator_link()"
});
formatter.result({
  "duration": 1512633600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.i_reach_the_BMI_calculator_page()"
});
formatter.result({
  "duration": 5744800,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.validate_the_title_of_the_page_again()"
});
formatter.result({
  "duration": 15615300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 6
    },
    {
      "val": "160",
      "offset": 9
    },
    {
      "val": "70",
      "offset": 13
    }
  ],
  "location": "AssignmentStepDefinition.input(String,String,String)"
});
formatter.result({
  "duration": 1096695400,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 818531900,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.capture_the_BMI_Value_and_Print_it()"
});
formatter.result({
  "duration": 65737600,
  "status": "passed"
});
formatter.match({
  "location": "AssignmentStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1258279200,
  "status": "passed"
});
});