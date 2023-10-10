$(document).ready(function () {
    var header = $("#header");
    var navigation = $(".navigation");
    // Initially hide the navigation
    navigation.hide();

    $(window).on("scroll", function () {
        console.log("Scroll event triggered");
        var headerTop = header.offset().top;
        var headerBottom = headerTop + header.height();
        var viewportTop = $(window).scrollTop();

        if (headerBottom <= viewportTop) {
            navigation.show();
        } else {
            navigation.hide();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
   const navBar = document.getElementById("nav");
   const sections = document.querySelectorAll(".section");
})