$(document).ready(function() {
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        
        if ($(document).scrollTop() > 0)
        {
            $(".navbar-brand").css("font-size", "18px");
            $(".navbar-brand").html("GoodStarter");
            $(".navbar-default").css("opacity", "0.8");
            $(".navbar-default").css("height", "50px");
            $(".navbar-nav li a").css("display", "inline-block");
            $(".navbar-brand").css("line-height", "20px");
            $(".navbar-nav li a").css("line-height", "20px");
            $(".navbar-form").css("line-height", "20px");
        }
        else
        {
            $(".navbar-brand").html("GoodStarter <i class=\"fa fa-leaf\"></i>");
            $(".navbar-default").css("opacity", "1");
            $(".navbar-brand").css("font-size", "36px");
            $(".navbar-default").css("height", "80px");
            $(".navbar-brand").css("line-height", "50px");
            $(".navbar-nav li a").css("line-height", "50px");
            $(".navbar-form").css("line-height", "60px");
        }
        
        });
});