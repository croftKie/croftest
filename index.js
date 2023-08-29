import {
  typeCheck,
  typeCheckNum,
  typeCheckString,
  contentCheck,
  greaterThan,
  lessThan,
  matchString,
} from "./utils/checks.js";

export default class Test {
  constructor(test_name, test_input, test_result, testable_solution) {
    this._test_name = test_name;
    this._test_input = test_input;
    this._expected_result = test_result;
    this._testable_solution = testable_solution;
    this._test_result = eval(this._testable_solution + this._test_input);
  }

  //Testing Methods
  toEqual() {
    try {
      const type_check = typeCheck(this._test_result, this._expected_result);
      if (type_check) {
        const content_check = contentCheck(
          this._test_result,
          this._expected_result
        );
        if (content_check) {
          return "Test Passed";
        } else {
          return "Content of Result does not match Test";
        }
      } else {
        return "Result has incorrect type";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }
  toBeGreater() {
    try {
      const type_check = typeCheckNum(this._test_result, this._expected_result);
      if (type_check) {
        const content_check = greaterThan(
          this._test_result,
          this._expected_result
        );
        if (content_check) {
          return "Test Passed";
        } else {
          return "Content of result is not greater than test parameter";
        }
      } else {
        return "Result has incorrect type";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }
  toBeLess() {
    try {
      const type_check = typeCheckNum(this._test_result, this._expected_result);
      if (type_check) {
        const content_check = lessThan(
          this._test_result,
          this._expected_result
        );
        if (content_check) {
          return "Test Passed";
        } else {
          return "Content of result is not less than test parameter";
        }
      } else {
        return "Result has incorrect type";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }
  toMatchString() {
    try {
      const type_check = typeCheckString(
        this._test_result,
        this._expected_result
      );
      if (type_check) {
        const content_check = matchString(
          this._test_result,
          this._expected_result
        );
        if (content_check) {
          return "Test Passed";
        } else {
          return "test string does not match expected result";
        }
      } else {
        return "Result has incorrect type";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }
  toMatchType() {
    try {
      const type_check = typeCheck(this._test_result, this._expected_result);
      if (type_check) {
        return "Test passed";
      } else {
        return "Result has incorrect type";
      }
    } catch (error) {
      return "function could not be evaluated";
    }
  }

  // Getters
  getTestName() {
    return this._test_name;
  }
  getTestInput() {
    return this._test_input;
  }
  getExpectedResult() {
    return this._expected_result;
  }
  getTestableSolution() {
    return this._testable_solution;
  }

  // Setters
  setTestName(name) {
    this._test_name = name;
  }
  setTestInput(input) {
    this._test_input = input;
  }
  setExpectedResult(result) {
    this._expected_result = result;
  }
  setTestableSolution(solution) {
    this._testable_solution = solution;
  }

  debug() {
    console.log(`Test Name : ${this._test_name}`);
    console.log(`Test Input: ${this._test_input}`);
    console.log(`Expected Result: ${this._expected_result}`);
    console.log(`Testable Solution: ${this._testable_solution}`);
    console.log(`Test Result: ${this._test_result}`);
  }
}
