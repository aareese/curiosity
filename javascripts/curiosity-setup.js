(function() {
    var navigation = responsiveNav("#nav", { // Selector: The ID of the wrapper
        animate: true, // Boolean: Use CSS3 transitions, true or false
        transition: 400, // Integer: Speed of the transition, in milliseconds
        label: "Menu", // String: Label for the navigation toggle
        insert: "after", // String: Insert the toggle before or after the navigation
        customToggle: "", // Selector: Specify the ID of a custom toggle
        openPos: "relative", // String: Position of the opened nav, relative or static
        jsClass: "js", // String: 'JS enabled' class which is added to <html> el
        init: function() {}, // Function: Init callback
        open: function() {}, // Function: Open callback
        close: function() {} // Function: Close callback
    });

    $(function() {
        Grid.init();
    });

    $(function() {
        $('.carousel').carousel({
            interval: 2000
        })
    })

    $(function() {
        $('#letter-container-1st').fancyTypewriter({
            targetText: "Right now a scientific laboratory is driving around the surface of Mars.",
            type: true,
            steps: 3,
            timeBetweenSteps: 20,
            'mouseOver': false,
            underScore: false,
            callback: function() {
                $('#letter-container-2nd').fancyTypewriter({
                    targetText: "This is its story.",
                    type: true,
                    steps: 3,
                    timeBetweenSteps: 20,
                    'mouseOver': false,
                    underScore: false,
                    callback: function() {
                        // $('#video').attr('padding-top', '10%');
                        // $('#video').fadeIn();
                        if ($.browser.mozilla) {
                            $('#video').replaceWith($('#video-iframe'));
                            $('#video-iframe').wrap("<center></center>");
                            $('#video-iframe').width('808px');
                            $('#video-iframe').height('435px');
                        }
                        stLight.options({
                            publisher: "740c9547-1d4a-471b-9a7b-c186a6a786fa",
                            doNotHash: false,
                            doNotCopy: false,
                            hashAddressBar: false
                        });
                    }
                });
            }
        });
    })
})();