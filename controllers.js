const {
  displayCountdown
} = require("./views");

const timer = seconds => {

  let countdown = setInterval(function() {
    seconds -= 1
    displayCountdown(seconds) // call minutes and seconds if exist
    if (seconds === 0) {
      clearInterval(countdown)
    }
  }, 1000)

};

module.exports = {
  timer
};