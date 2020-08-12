// Reverse & Forward Counter Both Method 1
function startTime() {
    var startingMin = 3;
    var time = startingMin * 60;
    var timer = document.getElementById("timer");

    function updateCountDown() {
        var min = Math.floor(time / 60)
        var sec = time % 60;

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        timer.innerHTML = min + ":" + sec;

        // Forward
        // time++

        // Reverse
        time--

        if (min == 00 && sec == 00) {
            // alert("Oopps!! Time Up");
            // window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}
startTime()




// Reverse Counter Method 2

var min=0, sec=0, ms=0, interval=0;
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")
var timeInSeconds = 60
// If you want 2 min timer then you will use 1 Here:
var time= 1
function millisecond() {
ms++
if (ms >= 100) {
sec++
getSec.innerHTML = timeInSeconds-sec
ms = 0
}
if (sec >= 60) {
min++
getMin.innerHTML = "0"+ time-min
sec = 0

// Result Page If Time Over
if(getMin.innerHTML==-1){
alert("Oops!!")
// sweetAlertTimer("Your Time Is Over!<br> Submitting Quiz") 
}
}
}
function start() {
interval = setInterval(millisecond, 10);
}
start()



















