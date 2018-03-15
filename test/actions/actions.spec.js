const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

RequireUtils
  .readAvailableActions()
  .forEach(action => {
    describe('Action: ' + action, () => {
      it(`has name, description, props array, print method and fetch method`, () => {
        const { name, run, props, description } = RequireUtils.getAction(action);

        expect(run).to.be.an('function');
        expect(props).to.be.an('array');
        expect(description).to.be.a('string');
        expect(name).to.be.a('string');
      });
    });
  });
