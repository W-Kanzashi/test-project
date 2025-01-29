import { Given, Then, When } from "@cucumber/cucumber";
import assert from "assert";

let number1;
let number2;
let result;

Given("I call the sum function with {int} and {int}", function (a, b) {
  // Write code here that turns the phrase above into concrete actions
  number1 = a;
  number2 = b;
});

When("I sum them", function () {
  // Write code here that turns the phrase above into concrete actions
  result = number1 + number2;
});

Then("the result must be {int}", function (res) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(result, res);
});
