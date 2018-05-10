const { displayCountdown } = require("./views");

const timer = seconds => {
  let myInter = setInterval(function () {
    let textCountDown = secondsToMinutes(seconds)
    displayCountdown(textCountDown)
    if (seconds === 0) {
      clearInterval(myInter)
    } else {
      seconds--
    }
  }, 1000)

};

function secondsToMinutes(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  let result = '';
  result += (minutes < 10 ? "0" : '') + minutes + ':' + (seconds < 10 ? "0" : '')
  result += '' + seconds;
  return result;
}

module.exports = {
  timer
};
