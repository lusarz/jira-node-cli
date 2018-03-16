module.exports = {
  fillWithSpaces (text, requiredLength) {
    return text + ' '.repeat(Math.max(requiredLength - text.length, 0));
  },

  toBase64: text => Buffer.from(text).toString('base64')
};
