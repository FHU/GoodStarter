$(document).ready(function() {
    /* Function to stretch navbar at screen top */
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        
        if ($(document).scrollTop() > 0)
        {
            $(".navbar-brand").css("font-size", "18px");
            //$(".navbar-brand").html("GoodStarter");
            $(".navbar-default").css("opacity", "0.8");
            $(".navbar-default").css("height", "50px");
            $(".navbar-nav li a").css("display", "inline-block");
            $(".navbar-brand").css("line-height", "20px");
            $(".navbar-nav li a").css("line-height", "20px");
            $(".navbar-form").css("line-height", "20px");
            $(".container>.navbar-collapse").css("margin-top", "0");
        }
        else
        {
            //$(".navbar-brand").html("GoodStarter <i class=\"fa fa-leaf\"></i>");
            $(".navbar-default").css("opacity", "1");
            $(".navbar-brand").css("font-size", "36px");
            $(".navbar-default").css("height", "80px");
            $(".navbar-brand").css("line-height", "50px");
            $(".navbar-nav li a").css("line-height", "50px");
            $(".navbar-form").css("line-height", "60px");
            if ( $(window).width() < 768)
            {
                $(".container>.navbar-collapse").css("margin-top", "30px")
            }
        }
        
        });
});