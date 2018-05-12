const {
  displayCountdown
} = require("./views");
const timer = seconds => {

  var countdown = setInterval(function() {
    if (seconds >= 0) {
      var setTime = Math.floor(seconds / 60)
      var timemodulus = Math.floor(seconds % 60)
      if (setTime <= 9 ) {
        var showTime = `0${setTime} : 0${timemodulus}`
        displayCountdown(showTime)
        seconds--
      }
      else if(setTime > 9){
        var showTime = `${setTime} : ${timemodulus}`
        displayCountdown(showTime)
        seconds--
      }

    } else {
      clearInterval(countdown)
    }
  }, 1000)

}

module.exports = {
  timer
};
