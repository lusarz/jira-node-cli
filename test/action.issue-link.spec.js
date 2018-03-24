const sinon = require('sinon');

const IssueLinkAction/*:Action*/ = require('../lib/actions/issue-link');
const ConfigurationUtils = require('../lib/utils/configuration-utils');
const clipboardy = require('clipboardy');

describe('When user invoke issue-link action', () => {
  let sandbox;

  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(ConfigurationUtils, 'readConfiguration').returns({ API_URL: 'https://example.atlassian.net'});
    sandbox.spy(clipboardy, 'write');
    IssueLinkAction.run('ABC-16');
  });

  after(() => { sandbox.restore() });

  it('should get link copied into clipboard', () => {
    sinon.assert.calledWith(clipboardy.write, 'https://example.atlassian.net/browse/ABC-16');
  });
});
