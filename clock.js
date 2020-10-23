function currentTime(){
	var date= new Date();

	var hr=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();


	hr=updateTime(hr);
	min=updateTime(min);
	sec=updateTime(sec);

	document.getElementById("hour").innerText=hr;
	document.getElementById("minute").innerText=min;
	document.getElementById("second").innerText=sec;

	var t= setTimeout(function(){currentTime()}, 1000);

}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();

