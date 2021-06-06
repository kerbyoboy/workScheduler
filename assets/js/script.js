  $(document).ready(function () {
    var today = new Date(); 
    document.getElementById("currentDay").innerHTML = today;
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      var value1 = document.getElementsByClassName("description").value;
      var time1 = document.getElementsByClassName("time-block").value;
      console.log(value + " value1");
      console.log(time + " time1");
      localStorage.setItem(time, value);
    });
   // document.getElementsById("hour9").innerHTML 
   // document.getElementsByClassName("description").innerHTML
    // localStorage.getItem(time, value);
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour99 .description").val(localStorage.getItem("hour9"));
    });
