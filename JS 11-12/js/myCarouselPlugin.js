/*
 jQuery plug-in for creating carousel

 initialization (put it in your main.js)
 $(document).ready(function () {
 $().carouselPlugin();
 });

 */

(function ($) {



    $.fn.carouselPlugin = function (options) {
        console.log('connected');
        var $leftUIEl = $('.carousel__arrow--left'),
            $rightUIEl = $('.carousel__arrow--right'),
            $elementsList = $('.carousel__list'),
            $carousel = $('.carousel'),
            repeat = null;

        var pixelsOffset = 125,
            currentLeftValue = 0,
            elementsCount = $elementsList.find('li').length,
            minimumOffset = -((elementsCount - 5) * pixelsOffset),
            maximumOffset = 0,
            $settings = $.extend(true, {
                buttons: {
                    "background-color": "red",
                    "border": "5px solid #ccc"
                },
                carousel: {
                    "background-color": "green",
                    "border": "5px solid #ccc"
                },
                interval: 2000
            }, options);


        function colorFade(element) {
            element.mouseenter(
                function () {
                    $(element).animate({
                        backgroundColor: "#E12A2A"
                    }, 500);
                })
                .mouseleave(function () {
                    $(element).animate({
                        backgroundColor: "#E14B4B"
                    }, 500);
                });
        }


        $carousel.css($settings.carousel);

        colorFade($leftUIEl);
        colorFade($rightUIEl);

        $leftUIEl
            .css($settings.buttons)
            .click(function () {
                if (currentLeftValue != maximumOffset) {
                    currentLeftValue += 125;
                    $elementsList.animate({left: currentLeftValue + "px"}, 500);
                    clearInterval(repeat);
                }
            });

        $rightUIEl
            .css($settings.buttons)
            .click(function () {
                if (currentLeftValue != minimumOffset) {
                    currentLeftValue -= 125;
                    $elementsList.animate({left: currentLeftValue + "px"}, 500);
                    clearInterval(repeat);
                }
            });

        repeat = setInterval(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                $elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        }, $settings.interval);

        return this;
    };
})(jQuery);
