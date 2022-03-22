$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#primary").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#success").click(function() {
    $("body").removeClass();
  });

}); 