const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

RequireUtils
  .readAvailableActions()
  .forEach(action => {
    describe('Action: ' + action, () => {
      it(`has name, description, props array, print method and fetch method`, () => {

        expect(action.run).to.be.an('function');
        expect(action.props).to.be.an('array');
        expect(action.description).to.be.a('string');
        expect(action.name).to.be.a('string');
      });
    });
  });
