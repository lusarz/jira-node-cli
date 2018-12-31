const RequireUtils = require('../lib/utils/require-utils');

it('every alias has description, action and propsData', () => {
  RequireUtils
    .readAvailableAliases()
    .forEach(({ alias }) => {
      expect(alias.propsData).to.be.an('object');
      expect(alias.actionName).to.be.a('string');
    });
});
