(function ($) {
    $.fn.CustomMap = function (options) {
        var posLatitude = $('#map').data('position-latitude');
		var	posLongitude = $('#map').data('position-longitude');
		var iconMap = $('#map').data('marker-img');
		if (iconMap === undefined) {
		    //console.log("iconmap is undefined");
		    iconMap = 'https://www.google.com/mapfiles/marker.png';
		}
        var settings = $.extend({
            home: { latitude: posLatitude, longitude: posLongitude },
            text: '<div class="map-popup"><h4>Langquid.com</h4><p> is the best place for learning and practicing English, IELTS, TOEFL, TOEIC.</p></div>',
            //icon_url: {},
            icon_url: iconMap,
            zoom: 15
        }, options);

        var coords = new google.maps.LatLng(settings.home.latitude, settings.home.longitude);

        return this.each(function () {
            var element = $(this);

            var options = {
                zoom: settings.zoom,
                center: coords,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                panControl: true,
                disableDefaultUI: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT
                },
                overviewMapControl: true,
            };

            var map = new google.maps.Map(element[0], options);

            var icon = {
                url: settings.icon_url,
                //url: 'https://www.google.com/mapfiles/marker.png',
                origin: new google.maps.Point(0, 0)
            };

            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                icon: icon,
                draggable: false
            });

            var info = new google.maps.InfoWindow({
                content: settings.text
            });

            google.maps.event.addListener(marker, 'click', function () {
                marker.setIcon('https://www.google.com/mapfiles/marker_green.png');
                info.open(map, marker);
            });

            var styles = [{ "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "color": "#f7f1df" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#d0e3b4" }] }, { "featureType": "landscape.natural.terrain", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "color": "#fbd3da" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#bde6ab" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffe15f" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#efd151" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "black" }] }, { "featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [{ "color": "#cfb2db" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#a2daf2" }] }];

            map.setOptions({ styles: styles });
        });

    } // end of fn.CustomMap



})(jQuery);


jQuery(document).ready(function () {
    jQuery('#map').CustomMap();
});