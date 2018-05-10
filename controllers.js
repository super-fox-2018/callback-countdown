const { displayCountdown } = require("./views");
// const

const timer = seconds => {
  // Your code here...
  setInterval(function() {
    if (seconds >= 0) {
      var jam = Math.floor(seconds/60);
      var detik = seconds%60;
      var stringJam = (jam<10)? '0'+jam.toString() : jam.toString();
      var stringDetik = (detik<10)? '0'+detik.toString() : detik.toString();
      var clock = stringJam +':'+ stringDetik;
      displayCountdown(clock);
      seconds = seconds - 1;
    } else {
      // displayCountdown('FINISH');
      clearInterval(this);
    }
  }, 1000);

};

module.exports = {
  timer
};
