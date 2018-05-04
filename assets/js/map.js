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
    $.get("select.php", function (data) {
        $(data).find("marker").each(function(index, value) {
           var location = $(value).attr("address");

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
                })
                .catch(function (error) {
                    console.log(error);
                })
        });
    });
}
