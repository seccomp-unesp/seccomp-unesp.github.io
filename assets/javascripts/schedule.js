"use strict"

$(function () {
  var gScheduleContainer      = $('#schedule'),
      gScheduleDayContainers  = gScheduleContainer.find('.schedule-content'),
      gScheduleMenu           = gScheduleContainer.find('.schedule-days'),
      gScheduleFilter         = gScheduleContainer.find('.schedule-filter');

  gScheduleMenu.on('click', 'li', function(){
    var aScheduleDay = $(this).data('day'),
        aScheduleDayContainer = gScheduleContainer
                              .find('[data-schedule="' + aScheduleDay + '"]');

    toggleActive(this);

    gScheduleDayContainers.hide();
    aScheduleDayContainer.fadeIn();
  });

  gScheduleFilter.on('click', 'li', function(){
    var aFilter      = $(this).data('filter');

    toggleActive(this);

    if(aFilter == ""){
      $(gScheduleDayContainers).find('[data-place]').show();
    }else{
      $(gScheduleDayContainers).find('[data-place]').hide();
      $(gScheduleDayContainers).find('[data-place="'+ aFilter +'"]').show();
    }

  });


function toggleActive(pObject){
  $(pObject).siblings().removeClass('active');
  $(pObject).addClass('active')
}

})
