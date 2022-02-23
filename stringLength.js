function stringLength(string) {
  if (string.length >= 1 && string.length < 10) {
    return string.length;
  } else return false;
}

//Arranging
stringLength("hi");
stringLength("");
stringLength("Hello World of JS!");
module.exports = stringLength;
