// const a = 5;
// const b = 4;
// console.log(a + b);

import { color } from "console-log-colors";
console.log(color.blue("Hello World"));

import _ from "lodash";
const max = _.max([1, 2, 3, 5]);
console.log(color.red(max));

import chalk from "chalk";
console.log(chalk.blue("Hello") + chalk.green(" World") + chalk.red("!"));
