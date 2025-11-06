// Home page
$(document).ready(function () {
    const diveInBtn = $("#diveInBtn");
    const homeText = $("#homeText");
    const socialIcons = $(".fa-brands");
    homeText.css({
        opacity: 1,
        transform: "translateX(0)"

    },500);
    diveInBtn.delay(700).animate({
        opacity: 1,
        left: "0px",
    },450);
    if($(window).width() > 768){
        diveInBtn
            .animate({padding: "7px 30px", fontSize: "3rem"},250)
            .animate({padding: "5px 70px", fontSize: "2rem"},200);
    } else {
        diveInBtn
        .animate({padding: "10px 30px", fontSize: "2rem"},250)
        .animate({padding: "7px 50px", fontSize: "1.5rem"},200);
    }

    socialIcons.hover( 
        function(){
            $(this).css({
                transform: "translateY(-8px)",
            },)
        },
        function(){
            $(this).css({
                transform: "translateY(0px)",
            })
        }
    );

});