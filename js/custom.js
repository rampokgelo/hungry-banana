$(document).ready(function () {
    AOS.init();

    $(function () {
        var shrinkHeader = 200;
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
});