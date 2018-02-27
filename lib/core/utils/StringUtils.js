function fillWithSpaces (text, requiredLength) {
  return text + ' '.repeat(requiredLength - text.length);
}

module.exports = {
  fillWithSpaces
}
