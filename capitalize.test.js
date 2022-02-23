const capitalize = require("./capitalize");

test("Capitalize-world", () => {
  //Arrange
  const string = "world";
  //Act
  const result = capitalize(string);
  //Assert
  expect(result).toBe("World");
});
