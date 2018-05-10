const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minutes = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    let result = '';
    if(minutes < 10){
      result += "0" + minutes;
    }
    else{
      result += minutes;
    }
  
    if(sec < 10){
      result += ":0" + sec;
    }
    else{
      result += ":" + sec;
    }
    console.log(chalk.cyan(figlet.textSync(result)));

};

module.exports = { displayCountdown };


