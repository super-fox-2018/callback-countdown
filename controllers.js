const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function(){
    let sec = seconds
    let minutes = 0
    let timeFormat = '00:00'
      while (sec >= 60) {
        minutes += 1
        sec -= 60
      }
      if(minutes < 10){
        minutes = `0${minutes}`
      }
      if(minutes < 60){
        minutes = `${minutes}`
      }
      if(sec < 10){
        sec = `0${sec}`
      }
      timeFormat = `${minutes}:${sec}`

      displayCountdown(timeFormat)
      if(seconds == 0){
        clearInterval(interval)
      }
      seconds--
  }, 1000)
}

module.exports = {
  timer
};
