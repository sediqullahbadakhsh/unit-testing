const reverseString = require("./reverseString");

test("reverse_string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
