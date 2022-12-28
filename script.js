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
// Loop over text areas
$(".description").each(function (index) {
  // extract hour id so that we can check localstorage
  //var getTime = $(this).parent().attr("id");
  var timeBlock = document.querySelectorAll(".time-block")[index];
  const getTime = timeBlock.getAttribute("id");
  //
  var gettingValue = localStorage.getItem(getTime);

  $(this).val(gettingValue);
});

$(".time-block").each(function (idex) {
  var presentTime = parseInt($(this).attr("id").replace("hour-", ""));
  var time = dayjs().hour();

  if (time > presentTime) {
    $(this).addClass("past");
  } else if (time < presentTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
});
// Need help getting the time always updated
function realTime() {
  const currentDay = $("#currentDay");

  let dateOfMonth = dayjs().format("dddd, MMMM DD, YYYY");

  currentDay.text(dateOfMonth);
}
realTime();
