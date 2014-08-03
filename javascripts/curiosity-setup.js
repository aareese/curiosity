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
            targetText: "Right now a rover is driving around Mars.",
            type: true,
            steps: 1,
            timeBetweenSteps: 1,
            'mouseOver': false,
            underScore: false,
            callback: function() {
                $('#letter-container-2nd').fancyTypewriter({
                    targetText: "This is its story.",
                    type: true,
                    steps: 1,
                    timeBetweenSteps: 1,
                    'mouseOver': false,
                    underScore: false,
                    callback: function() {
                        // $('.letter-container').slideUp();
                        $('#video').attr('padding-top', '10%');
                        $('#video').fadeIn();
                        Socialite.load($('article.social-sharing'));
                    }
                });
            }
        });
    })
})();