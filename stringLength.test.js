const stringLength = require("./stringLength");

test("Correct_string_length", () => {
  expect(stringLength("h")).toBe(1);
});

test("String-at-least-1-character-long", () => {
  expect(stringLength("")).toBeFalsy();
});

test("String-less-then-10-characters-long", () => {
  expect(stringLength("Hello World of JS!")).toBeFalsy();
});
