const stringLength = require("./stringLength");

test("Correct_string_length", () => {
  //Arrange
  string = "h";
  //Act
  const value = string;
  //Assert
  expect(stringLength(value)).toBe(1);
});

test("String-at-least-1-character-long", () => {
  //Arrange
  string = "";
  //Act
  const value = string;
  //Assert
  expect(stringLength(value)).toBeFalsy();
});

test("String-less-then-10-characters-long", () => {
  //Arrange
  string = "helo JS world!";
  //Act
  const value = string;
  //Assert
  expect(stringLength(value)).toBeFalsy();
});
