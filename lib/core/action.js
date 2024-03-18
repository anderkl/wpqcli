const inquirer = require("inquirer");
const download = require("../../lib/core/download");
const config = require("../../config");
const action = (projectName, other) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "projectType",
        message: "选择要创建的项目类型?",
        choices: config.projectType,
      },
      {
        type: "list",
        name: "vueType",
        message: "选择要创建的vue版本?",
        choices: config.vueType,
        when: function (answers) {
          return answers.projectType === "vue";
        },
      },
      {
        type: "list",
        name: "nodeType",
        message: "选择要创建的node框架?",
        choices: config.nodeType,
        when: function (answers) {
          return answers.projectType === "node";
        },
      },
      {
        type: "confirm",
        message: "是否用TS?",
        name: "isUseTs",
        when: function (answers) {
          return answers.vueType === "vue3";
        },
      },
    ])
    .then((answers) => {
      if (
        answers.projectType == "vue" &&
        answers.vueType == "vue3" &&
        answers.isUseTs
      ) {
        download.vue3TS(projectName);
      } else {
        console.log("该功能暂未开发~");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = action;
