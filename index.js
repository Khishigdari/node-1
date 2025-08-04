// const a = 5;
// const b = 4;
// console.log(a + b);

// ============

// import { color } from "console-log-colors";
// console.log(color.blue("Hello World"));

// import _ from "lodash";
// const max = _.max([1, 2, 3, 5]);
// console.log(color.red(max));

// import chalk from "chalk";
// console.log(chalk.blue("Hello") + chalk.green(" World") + chalk.red("!"));

// ============
let s = "Hello World";

const lengthOfLastWord = (s) => {
  // 1. find the last word
  // 2. return last word length

  // buh char log hiideg for loop bich
  //  if (char !== " ") console.log(char)
  // if(char === " ") return

  const arr = s.trim("").split(" ");
  return arr[arr.length - 1].length;

  //   let latsWordLength = 0;
  //   let isFindLastWord = false;
  //   for (i = s.length - 1; i >= 0; i--) {
  //     const char = s[i];
  //     if (char !== " ") {
  //       isFindLastWord = true;
  //       latsWordLength++;
  //       console.log(s[i]);
  //     } else {
  //       if (isFindLastWord) {
  //         return latsWordLength;
  //       }
  //     }
};
