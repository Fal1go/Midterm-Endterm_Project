$(document).ready(function () {
    const carousel = $(".product-cards-container");
    const cardWidth = $(".product-card").outerWidth(true);
    const cardsAmount = $(".product-card").length;
    let position = 0;
    let cardsPerRow;

    if($(window).width() > 992) cardsPerRow = 3
    else if($(window).width() <= 768) cardsPerRow = 1
    else  cardsPerRow = 2;

    $(window).resize(function(){
        if($(window).width() > 992) cardsPerRow = 3
        else if($(window).width() <= 768) cardsPerRow = 1
        else  cardsPerRow = 2;
    });


    console.log($('.product-card').outerWidth(true));

    $(".next").click(function() {
        if(position > -cardWidth * (cardsAmount - cardsPerRow)){   // 3 because on PC screen, it's the max amount of visible cards 
            position -= cardWidth
            carousel.css("transform", `translateX(${position}px)`);
        };
      });

    $(".prev").click(function() {
        if(position < 0){   
            position += cardWidth
            carousel.css("transform", `translateX(${position}px)`);
        };
      });

    $(".carousel-wrapper").on("wheel", function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
            $(".next").click();
        } else {
            $(".prev").click();
        }
    });

    $(".gallery-card").on("click", function() {
        const src = $(this).data("src"); // gets the URL from data-src
        $("#lightboxImage").attr("src", src);
        const modal = new bootstrap.Modal(document.getElementById("lightboxModal"));
        modal.show();
    });
      
});