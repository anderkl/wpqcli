#! /usr/bin/env node

const { program } = require("commander");
const help = require("../lib/core/help");
help(program);
const commander = require("../lib/core/commander");
commander(program);

program.parse(process.argv);
