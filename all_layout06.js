$(function () {
    //topBanner : lee 2022.03.17

    $(".topBanner .container i").on("click", topBannerHandler)

    function topBannerHandler() {
        $(".topBanner").slideUp();
    }
})


$(".visualSlide").slick(
    {
        arrows: false,
        autoplay: true,
        dots: true,
    }
);