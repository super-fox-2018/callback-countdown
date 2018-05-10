const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Timer")));
  // Your code here...
  console.log(secondFormatter(seconds));

};

function secondFormatter(seconds) {
  let minute = Math.floor(seconds / 60);
  if (seconds >= 60) { seconds = seconds - (minute * 60) }
  if (seconds < 10) { seconds = `0${seconds}` }
  if (minute < 10) { minute = `0${minute}` }

  return `${minute}:${seconds}`
}

module.exports = { displayCountdown };
