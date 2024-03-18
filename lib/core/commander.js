const myAction = require("./action");
const commander = function (program) {
  program
    .command("create <projectName> [other...]")
    .alias("crt")
    .description("创建一个新项目")
    .action(myAction);
};
module.exports = commander;
