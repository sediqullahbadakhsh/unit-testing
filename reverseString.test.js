const reverseString = require("./reverseString");

test("reverse_string", () => {
  //Arrange
  string = "hello";
  //Act
  const text = string;
  //Assert
  expect(reverseString(text)).toBe("olleh");
});
