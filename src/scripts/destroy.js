(function($)
{
    var displayed; 

    var destroy = function(cubes) {
        displayed = displayed || $('.cube:not(.hidden)');
        selected = Math.floor((Math.random()*displayed.length)+1);
        $(displayed[selected]).addClass('hidden');
        displayed.splice(selected, 1);
    };

    $('.logo').on('click', '.cube', function () {
        destroy(1);
    });

})
(jQuery);