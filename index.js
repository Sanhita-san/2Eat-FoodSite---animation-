$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $("nav").css("background" , "#292424");
        }
  
        else{
            $("nav").css("background" , "#292424d6");  	
        }
    })
  })