/**
*
* jQuery colibri.js 0.1.0  Plugin
* Author	: Olivier Lesnicki
* Website	: https://github.com/olivierlesnicki/colibri.js
*
* Licensed under the MIT licenses:
* http://www.opensource.org/licenses/mit-license.php
*
**/

(function($) {

    $.colibri = (function(msg, clss) {

        var $container = $('#colibri-container');

        if (!$container.length) {

            var $container = $('<div/>').attr('id', 'colibri-container');

            $container.appendTo($('body'));

        }

        var $element = $('<div/>').attr('class', 'colibri').append(msg);

		if(clss){
			$element.addClass(clss);
		}

        $element.hide();
        $container.prepend($element);
        $element.fadeIn(300);

        var fadeAway = function() {

            var fade = function() {
                return $element.fadeOut(1000);
            }

            $.when(fade()).done(function() {

                if ($element.is(':visible')) {
                    return;
                }

                $element.remove();

                if ($container.children().length == 0) {
                    $container.remove;
                }

            });

        };

        setTimeout(fadeAway, 5000);

        return $element;

    });

})(jQuery);

function colibri(msg, clss) {
    $.colibri(msg, clss);
}