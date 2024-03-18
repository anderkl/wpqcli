const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const { exec } = require("child_process");

function vue3TS(projectName) {
  exec("npx dogsay --use acupofjs", (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log(`${stdout}`);
    const spinner = ora("Loading unicorns").start();
    spinner.color = "green";
    spinner.text = "Working hard to download ...";
    download(
      "github:anderkl/vue3-System-template#main",
      projectName,
      function (err) {
        if (!err) {
          spinner.succeed("下载完成");
          console.log(chalk.whiteBright.bold(" Done! you run:"));
          console.log(chalk.blueBright.bold("  cd " + projectName));
          console.log(chalk.blueBright.bold("  npm install"));
          console.log(chalk.blueBright.bold("  npm run serve"));
        } else {
          spinner.fail("下载失败");
        }
      }
    );
  });
}
module.exports = {
  vue3TS,
};
