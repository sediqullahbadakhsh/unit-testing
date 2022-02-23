const capitalize = (string) => {
  const arr = string.split("");
  const firstLetter = arr.shift();
  const lowerCaseLetters = arr.join("");
  return firstLetter.toUpperCase().concat(lowerCaseLetters);
};

module.exports = capitalize;
