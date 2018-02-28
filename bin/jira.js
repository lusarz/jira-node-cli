#!/usr/bin/env node

const program = require('commander');
const RequireUtils = require('../lib/utils/RequireUtils');

RequireUtils
  .readAvailableActions()
  .forEach(file => {
    const { print, fetch, command, description } = RequireUtils.getAction(file);

    program
      .command(command)
      .description(description)
      .action(params => fetch(params).then(print))
  });

program.parse(process.argv);
