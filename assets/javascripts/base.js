"use strict"

$(function () {

  var aDate             = new Date,
      aDay  = (aDate.getDay() > 5) ? 0 : aDate.getDay(),
      aCurrentSchedule = $('#schedule')
                          .find('[data-schedule]')[aDay];

                          console.log(aDay)

  $(aCurrentSchedule).fadeIn();

});
