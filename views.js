const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("My Timer Countdown")));
  // Your code here...
  let minutes = parseInt(seconds/60)
  let secs = seconds - minutes >= 10 && seconds%60 !== 0? ` : ${seconds - minutes*60}` : ` : 0${seconds - minutes*60}`
  minutes = minutes >= 10? `${minutes}` : `0${minutes}`
  if(seconds === 'FINISHED!'){
    minutes = seconds
    secs = ''
  }
  console.log(chalk.cyan(figlet.textSync(`${minutes}${secs}`)));
};

module.exports = { displayCountdown };
