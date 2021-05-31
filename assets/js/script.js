  $(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, value);
    });
    function hourUpdater() {
      var currentHour = moment().hours();
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
    function hourUpdater() {

      var interval = setInterval(hourUpdater, 15000);
      $('#hour9 .description').val(localStorage.getItem('hour9'));
      $('#hour10 .description').val(localStorage.getItem('hour10'));
      $('#hour11 .description').val(localStorage.getItem('hour11'));
      $('#hour12 .description').val(localStorage.getItem('hour12'));
      $('#hour1 .description').val(localStorage.getItem('hour1'));
      $('#hour2 .description').val(localStorage.getItem('hour2'));
      $('#hour3 .description').val(localStorage.getItem('hour3'));
      $('#hour4 .description').val(localStorage.getItem('hour4'));
      $('#hour5 .description').val(localStorage.getItem('hour5'));
      $('#hour6 .description').val(localStorage.getItem('hour6'));
      $('#hour7 .description').val(localStorage.getItem('hour7'));
      $('#hour8 .description').val(localStorage.getItem('hour8'));
      $('#hour99 .description').val(localStorage.getItem('hour99'));
    }
  });