// Take the background color
var background = document.body.style.backgroundColor = "#102A26";

// takes the input and monitors if it changes with Event Listener
var changeColor = document.getElementById("changeColor");
changeColor.addEventListener("input", changeBackground)

var timing = document.getElementById("time"); // take the h1 to show the time
var dateTime = document.getElementById("date"); // take the another h1 to show the date

var time = ""; // basically, this is the variable that will to contain the hours
var currentDate = ""; // this variable will to contain the current date

console.log("Code working...")

// function to get the time (hours and date)
function getTime(){

    let date = new Date();
    let hours = date.getHours(); // picks up the hours
    let minutes = date.getMinutes(); // picks up the minutes
    let seconds = date.getSeconds(); // picks up the seconds

    // formats the time as 0 before the number (if it is less than 10)

    if(hours < 10){
        hours = "0" + date.getHours()
    }

    if(minutes < 10){
        minutes = "0" + date.getMinutes();
    }

    if(seconds < 10){
        seconds = "0" + date.getSeconds();
    }

    let day = date.getDay(); // picks up the days
    let month = date.getMonth() + 1; // picks up the month
    let year = date.getFullYear(); // picks up the year (full year)

    // format the date
    if(month < 10) {
        month = "" + date.getMonth() +1;
    }

    if(day < 10) {
        day = "0" + date.getDay();
    }


    currentDate = day + " / " + month + " / " + year; // joins the day + month and year to format a complete date

    time = hours + " : " + minutes + " : " + seconds; // joins the hours, minutes and seconds 
}

// function to show the time and date on the screen
function showTime(){
    dateTime.innerText = currentDate;
    timing.innerText = time;
}

// function to change the background color
function changeBackground(){
    let checkColor = document.getElementById("changeColor").value; // picks up the input values
    background = document.body.style.backgroundColor = "#" + checkColor; // concatenate the # with the input value to form a hex

    // if the input is null, or equals nothing, the background is set to default color 
    if(checkColor == ""){
        background = document.body.style.backgroundColor = "#102A26"; // default color
    }

}

// function to check every second the date/time and show it
setInterval(() => {
    getTime()
    showTime()
}, 1000);