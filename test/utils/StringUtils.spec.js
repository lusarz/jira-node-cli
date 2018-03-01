const expect = require('chai').expect;
const StringUtils = require('../../lib/utils/StringUtils');

describe('StringUtils.fillWithSpaces', () => {
  it('return properly formatted text', () => {
    expect(StringUtils.fillWithSpaces('x', 5)).to.equal('x    ');
  });

  it('return original text when is longer that required length', () => {
    expect(StringUtils.fillWithSpaces('abcdefgh', 5)).to.equal('abcdefgh');
  });
});
