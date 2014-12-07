$(document).ready(function () {
    /* Function to stretch navbar at screen top */
    $(window).scroll(function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 0) {
            $(".navbar-brand").css("font-size", "18px");
            //$(".navbar-brand").html("GoodStarter");
            $(".navbar-default").css("opacity", "0.8");
            $(".navbar-default").css("height", "50px");
            $(".navbar-nav li a").css("display", "inline-block");
            $(".navbar-brand").css("line-height", "20px");
            $(".navbar-nav li a").css("line-height", "20px");
            $(".navbar-form").css("line-height", "20px");
        }
        else {
            //$(".navbar-brand").html("GoodStarter <i class=\"fa fa-leaf\"></i>");
            $(".navbar-default").css("opacity", "1");
            $(".navbar-brand").css("font-size", "36px");
            $(".navbar-default").css("height", "80px");
            $(".navbar-brand").css("line-height", "50px");
            $(".navbar-nav li a").css("line-height", "50px");
            $(".navbar-form").css("line-height", "60px");
        }
    });

    $("#homestate").typeahead({ source: states });

    $("#updateForm").hide();
    $("#postUpdate").click( function () {
        $("#updateForm").slideToggle()
    });
});


var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
 