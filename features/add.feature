Feature: The sum function
  
  Scenario: A sum function must return the sum of two numbers
    Given I call the sum function with 2 and 3 
    When I sum them
    Then the result must be 5
