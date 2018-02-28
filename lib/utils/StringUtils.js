module.exports = {
  fillWithSpaces (text, requiredLength) {
    return text + ' '.repeat(Math.max(requiredLength - text.length, 0));
  }
};
