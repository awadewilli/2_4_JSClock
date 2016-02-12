(function(){
//Interval//
var hourColor;
var minuteColor;
var secondColor;
var clock = setInterval( runThis, 1000);
function runThis(){
  var day = new Date();
  var hour = day.getHours();
  var minute = day.getMinutes();
  var second = day.getSeconds();
  console.log(hour, minute, second);
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minute;
  document.getElementById("seconds").innerHTML = second;
if(minute<10){
  document.getElementById("minutes").innerHTML = "0" + minute;
}
if(second<10){
  document.getElementById("seconds").innerHTML = "0" + second;
}
if(hour<10){
  document.getElementById("hour").innerHTML = "0" + hour;
}
var minPercent = (second/60)*100;
console.log(minPercent);
document.querySelector(".underline").style.width = minPercent + "%";
var color1 = second.toString(16);
var color2 = minute.toString(16);
var color3 = hour.toString(16);

//create background color from time//
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
hourColor = pad(color3, 2);
minuteColor = pad(color2, 2);
secondColor = pad(color1, 2);
document.getElementById("hour-color").innerHTML = hourColor;
document.getElementById("min-color").innerHTML = minuteColor;
document.getElementById("sec-color").innerHTML = secondColor;

var background = hourColor + minuteColor + secondColor;
console.log(background);

document.querySelector(".box").style.background = "#" + background;


//Hover to show color//
/*var day = new Date();
var hour = day.getHours();
var minute = day.getMinutes();
var second = day.getSeconds();
console.log(hour, minute, second);
var color1 = second.toString(16);
var color2 = minute.toString(16);
var color3 = hour.toString(16);

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
var hourColor = pad(color3, 2);
var minuteColor = pad(color2, 2);
var secondColor = pad(color1, 2);*/
}
var hex = document.querySelectorAll(".hex");
var times = document.querySelectorAll(".time");

var timebox = document.querySelector(".timer");

timebox.addEventListener("mouseenter",showcolor);
timebox.addEventListener("mouseleave",hidecolor);

function showcolor() {
  for(i=0; i < hex.length; i++) {
    hex[i].style.display = "inline-block";
  }
  for(i=0; i < times.length; i++) {
    times[i].style.display = "none";
  }
}

function hidecolor(){
  for(i=0; i < hex.length; i++) {
    hex[i].style.display = "none";
  }
  for(i=0; i < times.length; i++) {
    times[i].style.display = "inline-block";
  }
}

}());
