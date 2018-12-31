const IssueStatusAction/*:Action*/ = require('../../lib/actions/issue-status');
const IssuesDAO = require('../../lib/dao/issues-dao');
const IssuesPrinter = require('../../lib/printer/issues-printer');

let sandbox;

describe('jira issue-status', () => {
  before(() => {
    sandbox = sinon.sandbox.create();
    sandbox.stub(IssuesDAO, 'findIssueByName').resolves({ key: 'ABC-1' });
    sandbox.stub(IssuesPrinter, 'printIssueStatus');
    IssueStatusAction.run('ABC-1');
  });

  after(() => { sandbox.restore() });

  it('fetches issue data', () => {
    sinon.assert.calledWith(IssuesDAO.findIssueByName, 'ABC-1');
  });

  it('prints issue status', () => {
    sinon.assert.calledWith(IssuesPrinter.printIssueStatus, { key: 'ABC-1' });
  });
});
