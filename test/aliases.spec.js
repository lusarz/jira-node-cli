const expect = require('chai').expect;
const RequireUtils = require('../lib/utils/require-utils');

RequireUtils
  .readAvailableAliases()
  .forEach(({ alias, action }) => {
    describe('Alias: ' + alias.name, () => {

      it('has description, action and propsData', () => {
        expect(alias.propsData).to.be.an('object');
        expect(alias.actionName).to.be.a('string');
      });

      it(`every prop from ${alias.actionName} action should be defined in propsData`, () => {
        expect(Object.getOwnPropertyNames(alias.propsData).sort()).to.deep.equal(action.props.sort());
      });
    });
  });
