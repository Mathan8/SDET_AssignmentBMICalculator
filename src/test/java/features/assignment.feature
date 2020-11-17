Feature: Assignment BMI Calculator

  @RegressionTest
  Scenario Outline: BMI Calculator
    Given Open the Online Calculator URL
    And The page loads
    Then Validate the title of the page
    When I click on BMI calculator link
    And I reach the BMI calculator page
    And Validate the title of the page again
    Then Input <Age> <Height> <Weight>
    And Click on Calculate BMI
    Then Capture the BMI Value and Print it
    And Close the Browser

    Examples: 
    | Age | Height | Weight |
		|  10 |   127  |   40   |
		|  30 |   156  |   70   |
		|  25 |   152  |   55   |
		|  20 |   160  |   45   |
		|  35 |   160  |   70   |