export const typeCheck = (testable_solution_result, test_result) => {
  return typeof testable_solution_result === typeof test_result;
};

export const typeCheckNum = (testable_solution_result, test_result) => {
  if (typeof testable_solution_result !== "number") {
    return false;
  } else if (typeof test_result !== "number") {
    return false;
  }
  return typeof testable_solution_result === typeof test_result;
};

export const typeCheckString = (testable_solution_result, test_result) => {
  if (typeof testable_solution_result !== "string") {
    return false;
  } else if (typeof test_result !== "string") {
    return false;
  }
  return typeof testable_solution_result === typeof test_result;
};

export const contentCheck = (testable_solution_result, test_result) => {
  return testable_solution_result === test_result;
};

export const greaterThan = (testable_solution_result, test_result) => {
  return testable_solution_result > test_result;
};

export const lessThan = (testable_solution_result, test_result) => {
  return testable_solution_result < test_result;
};

export const matchString = (testable_solution_result, test_result) => {
  return testable_solution_result === test_result;
};
