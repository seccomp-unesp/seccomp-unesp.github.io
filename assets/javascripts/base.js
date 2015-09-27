"use strict"

$(function () {
  var aDate = new Date,
      aDay  = (aDate.getDay() > 5) ? 0 : aDate.getDay(),
      aCurrentSchedule = $('#schedule')
                          .find('[data-schedule]')[aDay];

  $(aCurrentSchedule).fadeIn();


// menu
  var gMainMenu = $('ul.menu');


  gMainMenu.on('click', 'li', function(e){
    e.preventDefault();
    $('html,body').scrollTo($(this).find('a').attr('href'), 500);
  });

});
