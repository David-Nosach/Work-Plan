$(function () {
  const businessHours = [
    { time: "9AM", id: "hour-9" },
    { time: "10AM", id: "hour-10" },
    { time: "11AM", id: "hour-11" },
    { time: "12PM", id: "hour-12" },
    { time: "1PM", id: "hour-13" },
    { time: "2PM", id: "hour-14" },
    { time: "3PM", id: "hour-15" },
    { time: "4PM", id: "hour-16" },
    { time: "5PM", id: "hour-17" },
  ];

  const container = $("#timeBlocksContainer");

  businessHours.forEach((hour) => {
    const timeBlock = `
      <div id="${hour.id}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${hour.time}</div>
        <textarea class="col-8 col-md-10 description" rows="3"></textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `;
    container.append(timeBlock);
  });

  // Display the current day at the top of the calendar
  var today = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(today);

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  });

  // Apply past, present, or future class to each time block
  function updateHourClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }

  updateHourClasses();

  // Load saved data from localStorage
  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    var description = localStorage.getItem(hour);
    if (description) {
      $(this).find(".description").val(description);
    }
  });

  // Update the classes every hour to reflect changes
  setInterval(updateHourClasses, 1000 * 60 * 60);
});
