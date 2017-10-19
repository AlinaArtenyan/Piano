// (function($, undefined) {
    'use strict';

    var pressed = true;

    const PATH = 'content/audios/';

    window.Piano = function(octaveCount) {
        var that = this;

        Object.defineProperties(this, {
            elem:{
                value: $('<piano>', {
                    appendTo: document.body,
                    append: (new Main()).elem,
                    keypress: function(e) {
                        var key = that.elem.find('[data-key="' + e.which + '"]');

                        if(pressed) {
                            var elem = $(this).find('[data-key=' + e.which + ']');
                            if(key.is('whitekey')) {
                                key.addClass('activeWhite');
                            } else {
                                key.addClass('activeBlack')
                            }
                            if (elem.length) {
                                var audio = new Audio(PATH + `${elem.data('file')}`);
                                audio.play();
                            }
                            pressed = false;
                            $(this).one('keyup', function (e) {
                                key.removeClass('activeWhite  activeBlack');
                                pressed = true;
                            });

                        }
                    }
                })
            }
        });
        this.elem.attr( "tabindex","-1");
    };

// }(jQuery));