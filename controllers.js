const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
    let myInterval = setInterval(function(){
      if(seconds<=0) {
        clearInterval(myInterval) 
        displayCountdown('FINISHED!')
        return
      }
      displayCountdown(seconds--)
    },1000)
};


module.exports = {
  timer
};
