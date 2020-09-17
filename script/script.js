function timeToString(time){
	if(time < 10){
		return '0' + time;
	} else {
		return String(time);
	}
}
function setTime(){
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds(); 

	var hoursHTML = document.getElementsByClassName('hours');
	var minutesHTML = document.getElementsByClassName('minutes');
	var secondsHTML = document.getElementsByClassName('seconds');

	hoursHTML[0].innerHTML = timeToString(hours)[0];
	hoursHTML[1].innerHTML = timeToString(hours)[1];

	minutesHTML[0].innerHTML = timeToString(minutes)[0];
	minutesHTML[1].innerHTML = timeToString(minutes)[1];

	secondsHTML[0].innerHTML = timeToString(seconds)[0];
	secondsHTML[1].innerHTML = timeToString(seconds)[1];
}
window.onload = function(){
	setInterval(setTime,1000);
}
