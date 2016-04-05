jQuery(document).ready(function() {

    var team = $("#team-carousel");
    team.owlCarousel({
        items: 1,
        nav: true,
        navText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
        dots:false,
        loop: true
    });

    var tour = $("#tour-carousel");
    tour.owlCarousel({
        margin: 15,
        nav: true,
        navText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
        dots:false,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            768:{ items:3 },
            992:{ items:4 }
        }
    });


    // setup google maps api overlay
    $('#google-map').gMap({
        address: '110 Kimball Ave. #310, South Burlington, VT 05403',
        zoom: 16,
        markers: [
            {
                address: "110 Kimball Ave. #310, South Burlington, VT 05403",
                icon: {
                    image: "assets/images/icons/map-icon-red.png",
                    iconsize: [32, 39],
                    iconanchor: [32,39]
                }
            }
        ],
        doubleclickzoom: false,
        controls: {
            draggable: false,
            panControl: false,
            zoomControl: false,
            scrollwheel: false,
            scaleControl: false,
            rotateControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
    });

});