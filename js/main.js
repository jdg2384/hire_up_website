$(document).ready(function() {
    "use-strict";

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    /*Url jumping*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Owl Carousel
    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

    });

    // Animate and WOW Animation
    var wow = new WOW(
        {
            offset: 50,
            mobile: false,
            live: true
        }
    );
    wow.init();

    /*====================================
      Portfolio Carousel
      ======================================*/
    	$(document).ready(function() {
    	  var owl = $("#team");
    	  owl.owlCarousel({

    	      itemsCustom : [
    	        [0, 1],
    	        [450, 1],
    	        [660, 2],
    	        [700, 2],
    	        [1200, 3],
    	        [1600, 3]
    	      ],
    	      navigation : false,
    	      pagination: true,
    	  });

    	});
    // Prettyphoto Installation
    $(document).ready(function(){
        $("a[class^='prettyPhoto']").prettyPhoto();
    });

});
