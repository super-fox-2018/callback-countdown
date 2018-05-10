const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

//function count(cb) {
	var num =seconds
	var set =  setInterval(function(){
		if(num>60 && num%60<10) {
			if(num<600) {
				seconds = `0${Math.floor(num/60)} : 0${num%60}`	
			}else{
				seconds = `${Math.floor(num/60)} : 0${num%60}`
			}
		}else if(num>60 && num%60>=10){
			if(num<600) {
				seconds = `0${Math.floor(num/60)} : ${num%60}`	
			}else{
				seconds = `${Math.floor(num/60)} : ${num%60}`
			}

		}else{
			seconds = `00:${num} `
		}

	 	displayCountdown(seconds)
		num--;

		if(num < 0 ) {
			clearInterval(set)	
		}
	}, 1000);


//}	

// count(function(seconds){
// 	console.log(seconds)
	
// })

}
	

module.exports = {
  timer
};
