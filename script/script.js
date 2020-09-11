var hours,minutes,seconds,hoursHTML,minutesHTML,secondsHTML;
function timeToString(time){
	if(time < 10){
		return '0' + time;
	} else {
		return String(time);
	}
}
function setLocalTime(){
	var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	seconds = now.getSeconds(); 

	hoursHTML = document.getElementsByClassName('hours');
	minutesHTML = document.getElementsByClassName('minutes');
	secondsHTML = document.getElementsByClassName('seconds');

	hoursHTML[0].innerHTML = timeToString(hours)[0];
	hoursHTML[1].innerHTML = timeToString(hours)[1];

	minutesHTML[0].innerHTML = timeToString(minutes)[0];
	minutesHTML[1].innerHTML = timeToString(minutes)[1];

	secondsHTML[0].innerHTML = timeToString(seconds)[0];
	secondsHTML[1].innerHTML = timeToString(seconds)[1];
}
function updateTime(){
	seconds++;
	if (seconds == 60){
		seconds = 0;
		minutes++;
		if(minutes == 60){
			minutes = 0;
			hours++;
			if(hours == 12){
				hours = 0;
				minutes = 0;
				seconds = 0;
			}
		}
	}
	hoursHTML[0].innerHTML = timeToString(hours)[0];
	hoursHTML[1].innerHTML = timeToString(hours)[1];

	minutesHTML[0].innerHTML = timeToString(minutes)[0];
	minutesHTML[1].innerHTML = timeToString(minutes)[1];

	secondsHTML[0].innerHTML = timeToString(seconds)[0];
	secondsHTML[1].innerHTML = timeToString(seconds)[1];
}
setLocalTime();
setTimeout(setInterval(updateTime,1000),1000)
