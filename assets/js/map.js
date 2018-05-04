//获取数据库的所有租房信息
$.get("select.php", function (data) {
    $(data).find("marker").each(function(index, value) {
        var content = ""
            .concat();

        // 搜索所有没被租出的房屋
        if ($(value).attr("status") === "0") {
            // 获取地址
            var address = $(value).attr("address");
        }
    });
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(43.6532, -79.3832),
        mapTypeId: 'terrain'
    });

    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
};


// Call geocode
geocode();

function geocode() {

    var location="5 Sheppard Ave E.";
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address : location,
            key : 'AIzaSyDao1DC4cHMICPAzOH93K4nZaswFnk4wP4'
        }
    })
        .then(function (response)
        {
            // Log Full response
            console.log(response);

            // Formatted Address
            console.log()
        })
        .catch(function (error) {
            console.log(error);
        })
}
