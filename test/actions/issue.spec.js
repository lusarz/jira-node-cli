const sinon = require('sinon');

const IssueAction/*:Action*/ = require('../../lib/actions/issue');
const IssuesDAO = require('../../lib/dao/issues-dao');
const IssuesPrinter = require('../../lib/printer/issues-printer');

let sandbox;

describe('When user invoke issue-status action', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(IssuesDAO, 'findIssueByName').resolves({ key: 'ABC-1' });
    sandbox.spy(IssuesPrinter, 'printIssueDetails');
    IssueAction.run('ABC-1');
  });

  after(() => { sandbox.restore() });

  it('issue should be fetched from jira server', () => {
    sinon.assert.calledWith(IssuesDAO.findIssueByName, 'ABC-1');
  });

  it('issue status should be printed', () => {
    sinon.assert.calledWith(IssuesPrinter.printIssueDetails, { key: 'ABC-1' });
  });
});
