$(function () {
    //topBanner : lee 2022.03.17

    $(".topBanner .container i").on("click", topBannerHandler)

    function topBannerHandler() {
        $(".topBanner").slideUp();
    }
})


$(".visualSlide").slick(
    {
        arrows: true,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        prevArrow: "<div class='msLeft'></div>",
        nextArrow: "<div class='msRight'></div>"
    }
);



//슬라이드 애니메이션

$(".visualSlide").on("afterChange", function (e, s, c) {
    $(".visualSlide figure").eq(c + 1).addClass("oo").siblings().removeClass("oo");
    if (c === 1) {
        $(".msLeft").addClass("oo")
    } else {
        $(".msLeft").removeClass("oo")
    }
})


$(".eProductSlide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
})

$(".eventProduct i:nth-of-type(1)").on("click", function () {
    $(".eProductSlide").slick("slickPause");
})
$(".eventProduct i:nth-of-type(2)").on("click", function () {
    $(".eProductSlide").slick("slickPlay");
})


$(".aProductSlide").slick({
    centerMode: true,
    centerPadding: '5px',
    arrows: false,
    dots: true,
    slidesToShow: 5,

});

$(".allProduct i:first-child").on("click", function () {
    $(".aProductSlide").slick("slickPrev");
})

$(".allProduct i:last-child").on("click", function () {
    $(".aProductSlide").slick("slickNext");
})


//youtube player



$(function () {
    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/vPX1N7yGheo',
        containment: '.movieBg',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
        startAt: 5,
        stopAt: 115,
    });
});

$(".movieBg i:first-child").on("click", function () {
    $("#bgndVideo").YTPPause();
})
$(".movieBg i:last-child").on("click", function () {
    $("#bgndVideo").YTPPlay();
})

// $(".tabMenu li").on("click", function () {
//     var idx = $(this).index();
//     $(this).addClass("oo").siblings().removeClass("oo");
//     $(".tabContent>div").eq(idx).addClass("oo").siblings().removeClass("oo");
// });


const hbtn = document.querySelector("#hoverBtn");
const more = document.querySelector(".more");
const heart = document.querySelector(".xi-heart");

hbtn.addEventListener("mouseover", () => {
    more.style.filter = "none";
    heart.style.opacity = "1";
})
hbtn.addEventListener("mouseleave", () => {
    more.style.filter = "grayscale(1)";
    heart.style.opacity = "0";
})


let current;
const LI = document.querySelector(".tabMenu");
const CON = document.querySelector(".tabContent");
LI.addEventListener("click", (e) => {
    let tg = e.target;
    console.log(tg);
    [...LI.children].forEach(el => el.classList.remove("oo"))
    if (current) current.classList.remove("oo");
    tg.classList.add("oo");
    current = tg;

    let idx = [...LI.children].indexOf(tg);
    console.log(idx);

    [...CON.children].forEach(el => el.classList.remove("oo"));
    [...CON.children][idx].classList.add("oo");
})

///


$("#link").on("change", function () {
    let linkSite = $(this).val();
    if (!linkSite) return;
    window.open(linkSite);
})


$(".popup01 .close").on("click", function () {
    $(this).parent().hide();
})