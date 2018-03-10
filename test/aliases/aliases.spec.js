const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

RequireUtils
  .readAvailableAliases()
  .forEach(aliasName => {
    describe('Alias: ' + aliasName, () => {
      const { description, actionName, propsData } = RequireUtils.getAlias(aliasName);
      const action = RequireUtils.getAction(actionName);

      it('has description, action and propsData', () => {
        expect(propsData).to.be.an('object');
        expect(actionName).to.be.a('string');
      });

      it(`every prop from ${actionName} action should be defined in propsData`, () => {
        expect(Object.getOwnPropertyNames(propsData).sort()).to.deep.equal(action.props.sort());
      });
    });
  });
