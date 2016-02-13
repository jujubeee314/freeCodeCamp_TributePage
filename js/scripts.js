$(document).ready(function() {
    $(".showtimeline").click(function(){
        $(".tribute-timeline").fadeIn("slow");
    });

    $(".hidetimeline").click(function() {
      $(".tribute-timeline").fadeOut("slow");
    });
});
