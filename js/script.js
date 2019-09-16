
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".nav-header").css("background" , "#3258a8");
        }    
        else{
            $(".nav-header").css("background" , "linear-gradient(to bottom, #000 0%, #0001 100%)");  	
        }
    })
  })