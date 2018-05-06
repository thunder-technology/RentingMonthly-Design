//获取数据库的所有租房信息
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(43.6532, -79.3832),
        mapTypeId: 'terrain'
    });
    var infoWindow = new google.maps.InfoWindow;

    $.get('select.php', function(data) {
        var markers = $(data).find('marker');
        Array.prototype.forEach.call(markers, function(markerElem) {
            var address = geocode($(markerElem).attr('address'));
            axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                params: {
                    address : address,
                    key : 'AIzaSyDao1DC4cHMICPAzOH93K4nZaswFnk4wP4'
                }
            })
                .then(
                //     function(response) {
                //
                //     // Log Full response
                //     var location = response.data.results[0].geometry.location;
                //     console.log(location);
                //     return {lat :location.lat, lng :location.lng};
                // }
                    function getPropertyMarkers(response) {
                        var location = response.data.results[0].geometry.location;
                        console.log(location);
                        $.ajax({
                            url: "Service/MapData.asmx/getPropertyMarkers",
                            type: "POST",
                            data: "{'response': '" + response + "'}",
                            async: true,
                            cache: true,
                            contentType: "application/json;",
                            dataType: "json",
                            success: function (data, textStatus, jqXHR) { //
                                var marker = new google.maps.Marker({
                                    map: map,
                                    position: location,
                                    draggable: true,
                                    animation: google.maps.Animation.DROP
                                });
                                marker.addListener('click', function() {
                                    window.location.href = this.url;
                                });
                            },
                            error: function (xmlHttpRequest, textStatus, errorThrown) {
                                console.log(xmlHttpRequest.responseText);
                                console.log(textStatus);
                                console.log(errorThrown);
                                alert("Screen shot this error: " + xmlHttpRequest.toString() + " " + textStatus.toString() + " " + errorThrown.toString());
                            }
                        });
                    }
                , function (error) {
                    console.log(error);
                });
        });
    });
}

function geocode(address) {

}
