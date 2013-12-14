(function($)
{
    var destroy = function(cubes) {
        displayed = $('.cube:not(.hidden)');
        selected = Math.floor((Math.random()*displayed.length)+1);
        $(displayed[selected]).addClass('hidden');
    };

    $('.logo').click( function () {
        destroy(1);
    });

})
(jQuery);