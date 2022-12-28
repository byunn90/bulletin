// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hours = $("time-block");
// console.log(hours);
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set ✅
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

$(".saveBtn").on("click", function () {
  // jquery $(this) element who initiated event
  var getValue = $(this).siblings("textarea").val();

  var getTime = $(this).parent().attr("id");

  localStorage.setItem(getTime, getValue);
});

$(".description").each(function (index) {
  // We wanna grab value from local storage based on id
  var getTime = $(this).parent().attr("id");

  var gettingValue = localStorage.getItem(getTime);

  $(this).val(gettingValue);
});
// ⬇ This gonna change all the colors for calender
$(".time-block").each(function (idex) {
  // get current hour
  // get row time
  var presentTime = $(".description").val();
  var time = dayjs().hour();

  // if (time > presentTime) {
  //   presentTime.css("background-color", "#77dd77");
  // } else {
  //   console.log("HI");
  // }
  // } else if (time < presentTime) {
  //   presentTime.css("background-color", "#ff6961");
  // } else {
  //   presentTime.css("background-color", "#d3d3d3");
  // }
});

function realTime() {
  const currentDay = $("#currentDay");

  let dateOfMonth = dayjs("2022").day("28").hour();

  currentDay.text(dateOfMonth);
}
realTime();
// var presentTime = $(".description");
// presentTime.css("background-color", "green");
// var presentTime = $(".text-center").val("");
// console.log(presentTime);

var presentTime = $("#hour").children(0).eq(1);
var time = dayjs().hour();

console.log(presentTime);
// console.log(time);
