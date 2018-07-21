
$(function() {
    $("i").hover(function(){
        $(this).addClass("colored")
    }, function(){
        $(this).removeClass("colored")
    });
});

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  });