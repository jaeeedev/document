$(function(){
    $(".popUp button").on("click", closePopup)

    function closePopup() {
        $(this).parent().hide();
    }
})
