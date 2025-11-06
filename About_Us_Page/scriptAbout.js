$(document).ready(function () {
    const photoSmallLeft = $(".photo-large");
    const photoSmallRight = $(".photo-small-top");
    const photoSpanBottom = $(".photo-small-bottom");
    const aboutBox = $(".about-content-panel");

    if($(window).width() > 768){
        aboutBox.css("display", "block").animate({right: "0px"})
        photoSmallRight.delay(300).css("display", "block").animate({top: "0px"})
        photoSpanBottom.delay(300).css("display", "block").animate({top: "0px"})
        photoSmallLeft.delay(600).css("display", "block").animate({left: "0px"})
    } else{
        photoSmallLeft.css("display", "block").animate({left: "0px"})
        photoSmallRight.delay(300).css("display", "block").animate({left: "0px"})
        photoSpanBottom.delay(600).css("display", "block").animate({top: "0px"})
        aboutBox.delay(800).css("display", "block").animate({top: "0px"})
    }
});