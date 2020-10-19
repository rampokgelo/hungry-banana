$(document).ready(function () {
    AOS.init();

    $(function () {
        var shrinkHeader = 150;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header').addClass('active');
            }
            else {
                $('.header').removeClass('active');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset;
        }
    });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("expand");
        $(".navbar-collapse").toggleClass("expand");
    });
});