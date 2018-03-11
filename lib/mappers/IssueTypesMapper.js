const IssueTypeMapper = {
  mapIssueType (serverIssueType) {
    const issueType/*: IssueType*/ = {
      id: serverIssueType.id,
      name: serverIssueType.name
    };

    return issueType;
  },

  mapIssueTypes (issueTypes) {
    return issueTypes.map(IssueTypeMapper.mapIssueType);
  }
};

module.exports = IssueTypeMapper;
