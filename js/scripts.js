$(document).ready(function() {
  event.preventDefault();

  var age = parseInt(prompt("How old are you?"));

  var yearsremaining = (18-age);

  $(".yearsremaining").text(yearsremaining);

  // var dob2 = $(":selected").val();
  //     $(".sele").text(dob2);

  if (age >= 18) {
    $('#vote').show();
  } else {
    $('#under-18').show();
  }


});
