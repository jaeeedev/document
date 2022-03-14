
$('.mainSlide').slick({
    arrows: false,
    autoplay: true,
    speed: 1000,
    dots: true,
});

$('.mainVisual .slideArrows i:first-child').on('click', function(){
    $('.mainSlide').slick('slickPrev');
})
$('.mainVisual .slideArrows i:last-child').on('click', function(){
    $('.mainSlide').slick('slickNext');
})