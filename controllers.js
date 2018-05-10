const { displayCountdown } = require("./views");

const timer = seconds => {
  displayCountdown(seconds);
  let cb = setInterval(function(){
    seconds--;
    displayCountdown(seconds);
    if(seconds === 0){
      clearInterval(cb);
    }
  }, 1000);
};

module.exports = {
  timer
};