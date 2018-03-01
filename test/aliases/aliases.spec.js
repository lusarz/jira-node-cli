const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

RequireUtils
  .readAvailableAliases()
  .forEach(alias => {
    describe('Alias: ' + alias, () => {
      const { description, action: actionName, propsData } = RequireUtils.getAlias(alias);
      const action = RequireUtils.getAction(actionName);

      it('has description, action and propsData', () => {
        expect(propsData).to.be.an('object');
        expect(actionName).to.be.a('string');
        expect(description).to.be.a('string');
      });

      it(`every prop from ${actionName} action should be defined in propsData`, () => {
        expect(Object.getOwnPropertyNames(propsData).sort()).to.deep.equal(action.props.sort());
      });
    });
  });
