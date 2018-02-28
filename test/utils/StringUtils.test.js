var expect = require('chai').expect;
var StringUtils = require('../../lib/utils/StringUtils');

describe('StringUtils.fillWithSpaces', function () {
  it('return properly formatted text', function () {
    expect(StringUtils.fillWithSpaces('x', 5)).to.equal('x    ');
  });
});
