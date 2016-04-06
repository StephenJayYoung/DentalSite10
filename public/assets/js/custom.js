jQuery(document).ready(function() {


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