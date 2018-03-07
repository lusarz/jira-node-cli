#!/usr/bin/env node

const program = require('commander');
const RequireUtils = require('../lib/utils/RequireUtils');
const ActionUtils = require('../lib/utils/ActionUtils');
const ConfigurationUtils = require('../lib/utils/ConfigurationUtils');

if (!ConfigurationUtils.configurationFileExists()) {
  ConfigurationUtils
    .promptUserForConfigurationProperties()
    .then(ConfigurationUtils.saveConfiguration)
    .then(runProgram);
} else {
  runProgram();
}

function runProgram () {
  RequireUtils
    .readAvailableActions()
    .forEach(action => {
      const { print, fetch, props, description } = RequireUtils.getAction(action);

      program
        .command(ActionUtils.buildCommand(action, props))
        .description(description)
        .action(params =>
          fetch(params)
            .then(print)
            .catch(err => { console.log(err); })
        );
    });

  RequireUtils
    .readAvailableAliases()
    .forEach(alias => {
      const { action, propsData, description } = RequireUtils.getAlias(alias);
      const { print, fetch, props } = RequireUtils.getAction(action);

      program
        .command(alias)
        .description(description)
        .action(() =>
          fetch(props.map(prop => propsData[prop]))
            .then(print)
            .catch(err => { console.log(err); })
        );
    });

  program.parse(process.argv);
  if (!program.args.length) {
    program.help();
  }
}
