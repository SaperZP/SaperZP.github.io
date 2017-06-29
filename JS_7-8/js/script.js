(function () {
    var $tab = $('.tabs-panel__link'),
        $article = $('.tabs-panel__content');

    function articleToggle() {
        $tab.removeClass('focused');
        $(this).addClass('focused');
        $article.removeClass('visible');

        $article.eq($(this).parent().index()).addClass('visible');
    }

    $tab.on("click", articleToggle);
    $tab.on("focus", articleToggle);
})();


(function () {
    var $input = $('.form__input'),
        $button = $('.form__button');

    $input.parent().append("<p class='form__tooltip'></p>");

    $input.hover(
        function () {
            $(this).next().text($(this).attr('data-title')).show()
        },
        function () {
            $(this).next().hide()
        });

    $input.focus(function () {
        $(this).next().text($(this).attr('data-title')).show().fadeOut(5000);
    });

    $button.click(function () {
        $input.each(function () {
            $(this).next().text($(this).attr('data-title')).show().fadeOut(5000);
        })
    })


})();