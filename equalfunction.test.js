function strictEquals(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return false;
  } else if (a == 0 && b == -0) {
    return true;
  } else if (a == -0 && b == 0) {
    return true;
  } else if (a == "0" && b == 0) {
    return false;
  } else if (a == 0 && b == "0") {
    return false;
  } else if (a == "0" && b == -0) {
    return false;
  } else if (a == -0 && b == "0") {
    return false;
  } else {
    return Object.is(a, b);
  }
}

describe("Given potential same values for 'a' and 'b'", () => {
  describe("When 'a' and 'b' are compared", () => {
    test("Then it should return 'true'", () => {
      const a = 1;
      const b = 1;
      expectedResult = true;

      result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When 'a' and 'b' are compared", () => {
    test("Then it should return 'false'", () => {
      const a = NaN;
      const b = NaN;
      expectedResult = false;

      result = strictEquals(a, b);

      expect(result).toBe(expectedResult);
    });
  });
});
