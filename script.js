var currentTime = moment().format('hhA')
$("#currentDay").text(moment().format('LL'));

for (var i = 9; i < 17; i++) {
    var newTimeBlock = $("<div>");
    $(newTimeBlock).attr("class", "row time-block");

    var newTime = $("<div>");
    $(newTime).attr("data-sort", moment().format('hhA'));
    var timeCheck = $(newTime).attr("data-sort")
    $(newTime).attr("class", "hour");
    $(newTime).text(moment().set('hour', i).format('hhA'));
    var description = $("<textarea>");
    $(description).attr("class", "description");
    var saveBtn = $("<button>");
    $(saveBtn).text("Save Changes")
    $(saveBtn).attr("class", "saveBtn")

    if (timeCheck.isBefore(currentTime) === true) {
        $(description).attr("class", "description future");
    }

    else if (timeCheck.isSame(currentTime) === true) {
        $(description).attr("class", "description present");
    }

    else {
        $(description).attr("class", "description past");
    }

    $(newTimeBlock).append(newTime, description, saveBtn);
    $(".container").append(newTimeBlock);
}
