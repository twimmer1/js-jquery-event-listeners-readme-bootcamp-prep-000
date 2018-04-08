function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == "G".charCodeAt(0)){
      alert('G was pressed');
  }
});
}

function submitIt() {
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();


});
