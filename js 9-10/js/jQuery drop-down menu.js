(function () {
    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').slideDown(200);
        },
        function () {
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    $("ul.sub-menu li").mouseenter(
        function () {
            $(this).animate({
                backgroundColor: "#E12A2A",
            }, 500);
        })
        .mouseleave(function () {
        $(this).animate({
            backgroundColor: "#E14B4B",
        }, 500);
    });

})();







