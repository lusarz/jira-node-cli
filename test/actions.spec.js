const RequireUtils = require('../lib/utils/require-utils');

it('every action has name, description, props array, print method and fetch method', () => {
  RequireUtils
    .readAvailableActions()
    .forEach(action => {
      expect(action.run).to.be.an('function');
      expect(action.props).to.be.an('array');
      expect(action.description).to.be.a('string');
      expect(action.name).to.be.a('string');
    });
});
