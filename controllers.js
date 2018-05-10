const {displayCountdown} = require('./views');

const timer = seconds => {
  setInterval(function() {
    if (seconds >= 0) {
      displayCountdown(seconds);
      seconds = seconds - 1;
    } else {
      displayCountdown('see youuu....');
      clearInterval(this);
    }
  }, 1000);

};

module.exports = {
  timer
};
