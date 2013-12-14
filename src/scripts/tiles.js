(function($)
{
    var offsetBackgrounds = function(els) {
        $(els).each(function() {
            var $el = $(this),
                coords = $el.position();
            $el.css(
                'background-position', '-' + coords.left + 'px -' + coords.top + 'px'
                );
        });
    };

    offsetBackgrounds('.cube');
})
(jQuery);