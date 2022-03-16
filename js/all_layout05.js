$(function(){

    $(".tabLink li").on("click", tabHandler);

    function tabHandler() {
        var idx = $(this).index();
        $(".tabLink li").removeClass("active");
        $(this).addClass("active");
        $(".tabContent>div").removeClass("active");
        $(".tabContent>div").eq(idx).addClass("active");
    }


    $(".xi-close").on("click", function() {
        $(".headerWrap").slideToggle(400);
    })
})