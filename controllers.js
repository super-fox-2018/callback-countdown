const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = seconds;
  displayCountdown(time);
  const intervalId = setInterval(() => {
    time -= 1;
    displayCountdown(time);
    if(time === 0) clearInterval(intervalId);
  }, 1000);
};

module.exports = {
  timer
};
