(function($) {
	"use strict";
	
    //Left nav scroll
    $(".nano").nanoScroller();

    // Left menu collapse
    $('.left-nav-toggle a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    });
	
	// Left menu collapse
    $('.left-nav-collapsed a').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("nav-collapsed");
    });
	
	//metis menu
   $('#menu').metisMenu();
	
    //slim scroll
    $('.scrollDiv').slimScroll({
        color: '#eee',
        size: '5px',
        height: '293px',
        alwaysVisible: false
    });
})(jQuery);
