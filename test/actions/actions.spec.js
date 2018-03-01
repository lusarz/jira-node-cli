const expect = require('chai').expect;
const RequireUtils = require('../../lib/utils/RequireUtils');

RequireUtils
  .readAvailableActions()
  .forEach(action => {
    describe('Action: ' + action, () => {
      it(`has description, props array, print method and fetch method`, () => {
        const { print, fetch, props, description } = RequireUtils.getAction(action);

        expect(print).to.be.an('function');
        expect(fetch).to.be.an('function');
        expect(props).to.be.an('array');
        expect(description).to.be.a('string');
      });
    });
  });
