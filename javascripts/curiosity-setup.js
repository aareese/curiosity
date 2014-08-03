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
        $('#letter-container').fancyTypewriter({
            targetText: "Right now a rover is driving around Mars. <br/> This is its story.",
            type: true,
            steps: 3,
            timeBetweenSteps: 25,
            'mouseOver': false,
            underScore: false,
            callback: function() {
                $('#letter-container').hide();

            }
        });
        // $.typer.options.typeSpeed = 50;
        // $('#letter-container').typeTo("Right now a rover is driving around Mars. This is its story.");
    })
})();