module.exports = {
  fillWithSpaces (text, requiredLength) {
    return text + ' '.repeat(requiredLength - text.length);
  }
};
