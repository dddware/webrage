(function($)
{
    var displayed = $('.cube:not(.hidden)');

    var destroy = function(cubes) {
        selected = Math.floor((Math.random()*displayed.length)+1);
        $(displayed[selected]).addClass('hidden');
        displayed.splice(selected, 1);
    };

    $('.logo').click( function () {
        destroy(1);
    });

})
(jQuery);