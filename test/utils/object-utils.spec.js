const expect = require('chai').expect;
const ObjectUtils = require('../../lib/utils/object-utils');

describe('ObjectUtils.readPropertyDeeply function', () => {
  const object = {
    a: {
      b: {
        c: 'some-value'
      }
    }
  };

  it('return value when path exists in object', () => {
    expect(ObjectUtils.readPropertyDeeply(object, 'a.b.c')).to.equal('some-value');
  });

  it('return value when path exists in object', () => {
    expect(ObjectUtils.readPropertyDeeply(object, 'a')).to.deep.equal({ b: { c: 'some-value' }});
  });

  it('return undefined when path not exists in object', () => {
    expect(ObjectUtils.readPropertyDeeply(object, 'a.x.y')).to.be.undefined;
  });
});
