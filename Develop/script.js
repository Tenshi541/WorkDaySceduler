var todayDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todayDate);

$document.ready(function () {
  // Save BTN click listener
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

function TimeTracker() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
  
    if (blockTime < currentTime) {
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else if (blockTime > currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");

    }
  })
}
// get item from local storage if any
  $("#hour9 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})