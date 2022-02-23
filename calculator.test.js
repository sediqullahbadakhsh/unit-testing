const Calculator = require("./calculator");

describe("Calculator", () => {
  //Arrange
  const a = 10;
  const b = 5;
  //Act
  test("Adding 10 + 5", () => {
    const addition = Calculator.add(a, b);
    //Assert
    expect(addition).toBe(15);
  });

  test("Substracting 10 - 5", () => {
    //Act
    const subtraction = Calculator.subtract(a, b);
    //Assert
    expect(subtraction).toBe(5);
  });

  test("Dividing 10 / 5", () => {
    //Act
    const division = Calculator.divide(a, b);
    //Assert
    expect(division).toBe(2);
  });

  test("Multipling 10 * 5", () => {
    //Act
    const multiplication = Calculator.multiply(a, b);
    //Assert
    expect(multiplication).toBe(50);
  });

  //Arrange
  const c = 15;
  const d = 3;
  test("Adding 15 + 3", () => {
    const addition = Calculator.add(c, d);
    //Assign
    expect(addition).not.toBe(138);
  });

  test("Substracting 15 - 3", () => {
    //Act
    const subtraction = Calculator.subtract(c, d);
    //Assign
    expect(subtraction).not.toBe(132);
  });

  test("Dividing 15 / 3", () => {
    //Act
    const division = Calculator.divide(c, d);
    //Assign
    expect(division).not.toBe(35);
  });

  test("Multipling 15 * 3", () => {
    //Act
    const multiplication = Calculator.multiply(c, d);
    //Assign
    expect(multiplication).not.toBe(5);
  });

  //Arrange
  const e = 20;
  const f = 10;
  test("Adding 20 + 10", () => {
    const addition = Calculator.add(e, f);
    //Assign
    expect(addition).toBe(30);
  });

  test("Substracting 20 - 10", () => {
    //Act
    const subtraction = Calculator.subtract(e, f);
    //Assign
    expect(subtraction).toBe(10);
  });

  test("Dividing 20 / 10", () => {
    //Act
    const division = Calculator.divide(e, f);
    //Assign
    expect(division).toBe(2);
  });

  test("Multipling 20 * 10", () => {
    //Act
    const multiplication = Calculator.multiply(e, f);
    //Assign
    expect(multiplication).toBe(200);
  });
});
