const AliasUtils = {
  prepareDescription (alias/*: Alias*/, action/*: Action*/) {
    return `Alias => jira ${action.name} '${AliasUtils.fillParameters(alias, action)}'`;
  },

  fillParameters(alias/*: Alias*/, action/*: Action*/) {
    return action.props.map(prop => alias.propsData[prop])
  }
};


module.exports = AliasUtils;
