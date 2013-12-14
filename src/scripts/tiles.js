(function($)
{
    var $logo = $('.logo'),
        config = {
            cubes: 10, // cubes per row

            logos: {
                angular: {
                    src: 'images/angular.png',
                    width: 500,
                    height: 500
                },
                ie: {
                    src: 'images/ie.svg',
                    width: 223,
                    height: 219
                }
            }
        };

    var positionAndPaint = function($els) {
        $els.each(function() {
            var $el = $(this),
                coords = $el.position();

            // Set CSS coordinates (for absolute positioning) and matching background-position
            $el.css({
                top: coords.top,
                left: coords.left,
                'background-position': '-' + coords.left + 'px -' + coords.top + 'px'
            });
        });
    };

    var initLogo = function(name) {
        var data = config.logos[name];

        $logo.empty().width(data.width);
        $logo.empty().height(data.height);

        // How many cubes do we need to fill this up ?
        var nbCubes = (data.height / (data.width / config.cubes)) * config.cubes;

        for (var i = 0; i < nbCubes; i++) {
            $logo.append('<div class="cube" />');
        }

        var $cubes = $('.cube');
        positionAndPaint($cubes);

        $cubes.css({
            position: 'absolute',
            'background-image': 'url(\'' + data.src + '\')'
        });
    };

    initLogo('ie');
})
(jQuery);