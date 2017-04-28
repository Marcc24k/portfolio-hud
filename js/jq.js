$(document).ready(function () {

    //mouse enter    
    $("#large-circle, #decker_history").mouseenter(function () {

        $("#large-circle").css("borderTopColor", "transparent");
        $("#large-circle").css("borderBottomColor", "transparent");
        $("#large-circle").css("borderLeftColor", "goldenrod");
        $("#large-circle").css("borderRightColor", "goldenrod");
    });
    //mouse enter
    $("#x-large-circle, #decker_folio").mouseenter(function () {

        $("#x-large-circle").css("borderLeftColor", "transparent");
        $("#x-large-circle").css("borderRightColor", "transparent");
        $("#x-large-circle").css("borderTopColor", "orangered");
        $("#x-large-circle").css("borderBottomColor", "orangered");
    });
    //mouse enter
    $("#small-circle, #decker_stats").mouseenter(function () {

        $("#small-circle").css("borderLeftColor", "purple");
        $("#small-circle").css("borderRightColor", "purple");
        $("#small-circle").css("borderTopColor", "transparent");
        $("#small-circle").css("borderBottomColor", "transparent");
    });

    //mouse leave
    $("#large-circle, #decker_history").mouseleave(function () {
        $("#large-circle").css("borderTopColor", "goldenrod");
        $("#large-circle").css("borderBottomColor", "goldenrod");
        $("#large-circle").css("borderLeftColor", "transparent");
        $("#large-circle").css("borderRightColor", "transparent");

    });

    //mouse leave
    $("#x-large-circle, #decker_folio").mouseleave(function () {

        $("#x-large-circle").css("borderLeftColor", "orangered");
        $("#x-large-circle").css("borderRightColor", "orangered");
        $("#x-large-circle").css("borderTopColor", "transparent");
        $("#x-large-circle").css("borderBottomColor", "transparent");
    });
    $("#small-circle, #decker_stats").mouseleave(function () {

        $("#small-circle").css("borderLeftColor", "transparent");
        $("#small-circle").css("borderRightColor", "transparent");
        $("#small-circle").css("borderTopColor", "forestgreen");
        $("#small-circle").css("borderBottomColor", "forestgreen");
    });

    $("#large-circle, #x-large-circle, #small-circle, #decker_stats, #decker_history, #decker_folio ").click(function () {

            $("#x-large-circle").rotate({

                endDeg: 80
                , persist: true,

            });

            $("#large-circle, #small-circle ").rotate({

                endDeg: -80
                , persist: true
            });
            //            $("").rotate({
            //
            //                endDeg: -80
            //                , persist: true
            //            });

        },

        //animate function starts here                                     
        function () {

            $("#x-large-circle ").rotate({
                endDeg: 360
                , duration: 2.5
                , easing: 'ease-out'
            });
            $("#small-circle ").rotate({
                endDeg: -360
                , duration: 2.0
                , easing: 'ease-out'

            });

            // large circle properties

            $("#large-circle").rotate({
                endDeg: -360
                , duration: 3.0
                , easing: 'ease-out'

            });
        });

    $(function () {
        //MODAL
        $(" #small-circle, #decker_stats ").click(function () {

            
            $('#dialog').delay(3000).slideDown(600)
                .queue(function (next) {
                    $("#hud").css('filter', 'blur(10px)');
                    next();
                });;
        });

        $("#large-circle, #decker_history, #hud ").click(function () {

            $('#about').delay(3000).slideDown(600)
                .queue(function (next) {
                    $("#hud").css(
                        'filter', 'blur(10px)'
                        , 'opacity', '.6'
                        , 'backgroundColor', '#000'
                        , 'z-index', '200'
                    );
                    next();
                });;


        });


        $("#x-large-circle, #decker_folio  ").click(function () {

            $('#folio').delay(3000).slideDown(600)

            .queue(function (next) {
                $("#hud").css(
                    'filter', 'blur(10px)'
                    , 'opacity', '.6'
                    , 'backgroundColor', '#000'
                    , 'z-index', '200'
                );
                next();
            });;

        });



        //slideup
        $('.stats-close').click(function () {
            $('#dialog').slideUp(500);
        });
        $('.about-close').click(function () {
            $('#about').slideUp(900);

        });

        $('.folio-close').click(function () {
            $('#folio').slideUp(900);
        });

    });
  
   
    
    

    //IF CLOSE ALL 3 CLOSE BUTTONS ARE CLICKED THEN BACKGROUND RETURNS TO NORMAL

    $('button').click(function () {
        $('#hud').html(function (i, val) {

            if (val >= 2) {
                console.log("GOOSE");
                $("#hud").css({
                    "filter": "blur(0px)"
                });
            } else if (val <= 2) {
                console.log("DUCK");
                $(this).unbind(val);
            }
            return val * 1 + 1;

        });
    });

    //DRAGGABLE MODAL WINDOWS


$( function() {
    $("#dialog, #about, #folio").draggable();
  } );



    //MOUSE ENTER
    $('#dialog, #about, #folio').mouseenter(function () {
        $('.name').text(" Sirealious Pendragon ");
        $('.name').css({
            "color": "#E818D9"
        });

        $(this).css({
            "box-shadow": "0 0 14px 2px green"
        });


        //RACE
        $('.modified').text(" Nord Elf ");
        $('.modified').css({
            "color": "#E818D9"
        });
        //front end
        $('.front').text(" Hacker/Modifier ");
        $('.front').css({
            "color": "#E818D9"
        });
    });

    //mouseleave
    $("#dialog, #about, #folio").mouseleave(function () {
        $('.name').text(" Marc Cook ");
        $('.name').css({
            "color": "orangered"
        });

        $(this).css({
            "box-shadow": "0 0 14px 2px orangered"
        });

        $('.modified').text("Human");
        $('.modified').css({
            "color": "orangered"
        });
        //front
        $('.front').text("Front-end Developer ");
        $('.front').css({
            "color": "orangered"
        });
    });



    //HIDE CURRENT MODAL WHEN ANOTHER IS CLICKED---MOBILE DESIGN.


    //var dialog = false;
    //$('#small-circle').on('hidden.bs.modal', function () {
    //    if (dialog) {
    //        $('#small-circle').modal('show');
    //        dialog = false;
    //    }
    //});
    //
    //$("#large-circle").click(function() {
    //    $('#small-circle').modal('hide');
    //    dialog = true;
    //});




    /*
jQuery-Rotate-Plugin v0.2 by anatol.at
http://jsfiddle.net/Anatol/T6kDR/
*/
    $.fn.rotate = function (options) {
        var $this = $(this)
            , prefixes, opts, wait4css = 0;
        prefixes = ['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
        opts = $.extend({
            startDeg: false
            , endDeg: 360
            , duration: 1
            , count: 1
            , easing: 'linear'
            , animate: {}
            , forceJS: false
        }, options);

        function supports(prop) {
            var can = false
                , style = document.createElement('div').style;
            $.each(prefixes, function (i, prefix) {
                if (style[prefix.replace(/\-/g, '') + prop] === '') {
                    can = true;
                }
            });
            return can;
        }

        function prefixed(prop, value) {
            var css = {};
            if (!supports.transform) {
                return css;
            }
            $.each(prefixes, function (i, prefix) {
                css[prefix.toLowerCase() + prop] = value || '';
            });
            return css;
        }

        function generateFilter(deg) {
            var rot, cos, sin, matrix;
            if (supports.transform) {
                return '';
            }
            rot = deg >= 0 ? Math.PI * deg / 180 : Math.PI * (360 + deg) / 180;
            cos = Math.cos(rot);
            sin = Math.sin(rot);
            matrix = 'M11=' + cos + ',M12=' + (-sin) + ',M21=' + sin + ',M22=' + cos + ',SizingMethod="auto expand"';
            return 'progid:DXImageTransform.Microsoft.Matrix(' + matrix + ')';
        }

        supports.transform = supports('Transform');
        supports.transition = supports('Transition');

        opts.endDeg *= opts.count;
        opts.duration *= opts.count;

        if (supports.transition && !opts.forceJS) { // CSS-Transition
            if ((/Firefox/).test(navigator.userAgent)) {
                wait4css = (!options || !options.animate) && (opts.startDeg === false || opts.startDeg >= 0) ? 0 : 25;
            }
            $this.queue(function (next) {
                if (opts.startDeg !== false) {
                    $this.css(prefixed('transform', 'rotate(' + opts.startDeg + 'deg)'));
                }
                setTimeout(function () {
                    $this
                        .css(prefixed('transition', 'all ' + opts.duration + 's ' + opts.easing))
                        .css(prefixed('transform', 'rotate(' + opts.endDeg + 'deg)'))
                        .css(opts.animate);
                }, wait4css);

                setTimeout(function () {
                    $this.css(prefixed('transition'));
                    if (!opts.persist) {
                        $this.css(prefixed('transform'));
                    }
                    next();
                }, (opts.duration * 1000) - wait4css);
            });

        } else { // JavaScript-Animation + filter
            if (opts.startDeg === false) {
                opts.startDeg = $this.data('rotated') || 0;
            }
            opts.animate.perc = 100;

            $this.animate(opts.animate, {
                duration: opts.duration * 1000
                , easing: $.easing[opts.easing] ? opts.easing : ''
                , step: function (perc, fx) {
                    var deg;
                    if (fx.prop === 'perc') {
                        deg = opts.startDeg + (opts.endDeg - opts.startDeg) * perc / 100;
                        $this
                            .css(prefixed('transform', 'rotate(' + deg + 'deg)'))
                            .css('filter', generateFilter(deg));
                    }
                }
                , complete: function () {
                    if (opts.persist) {
                        while (opts.endDeg >= 360) {
                            opts.endDeg -= 360;
                        }
                    } else {
                        opts.endDeg = 0;
                        $this.css(prefixed('transform'));
                    }
                    $this.css('perc', 0).data('rotated', opts.endDeg);
                }
            });
        }

        return $this;
    };
});