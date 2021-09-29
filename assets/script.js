// sets current day
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);
// stores task in local storage on click of save button 
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, task);
  });
});
// local storage 
$("#08 .description").val(localStorage.getItem("08"));
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
// function to change colors 
var timeColor = function() {
  var currentTime = moment().format('HH');

  var timeBlockEl = $(".time-block");
// loops through time blocks 
  for (var i = 0; i < timeBlockEl.length; i++) {
    var timeID = timeBlockEl[i].id;
    var changedID = document.getElementById(timeBlockEl[i].id);
    $(timeBlockEl).removeClass(".past, .present, .future");
    // applies class based on the time 
    if (timeID < currentTime) {
      $(changedID).addClass("past");
    } else if (timeID > currentTime) {
      $(changedID).addClass("future");
    } else {
      $(changedID).addClass("present");
    }
  }
}

timeColor();
// checks time every five minutes 
setInterval(timeColor(), (1000 * 60) *5);


