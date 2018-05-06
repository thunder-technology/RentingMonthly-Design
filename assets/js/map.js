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
            var type = $(markerElem).attr('type');
            var pos = geocode($(markerElem).attr('address'));
            var marker = new google.maps.Marker({
                map: map,
                position: pos,
                draggable: true,
                animation: google.maps.Animation.DROP,
            });
            marker.addListener('click', function() {
                window.location.href = this.url;
            });
        });
    });

    for(var i = 0; i < addresses.length; i++)
    {
        new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: addresses[i].lat, lng: addresses[i].lng}
        });
    }
}

function geocode(address) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address : address,
            key : 'AIzaSyDao1DC4cHMICPAzOH93K4nZaswFnk4wP4'
        }
    })
        .then(function(response)
        {
            // Log Full response
            var location = response.data.results[0].geometry.location;
            console.log(location);
            return {lat :location.lat, lng :location.lng};
        })
        .catch(function (error) {
            console.log(error);
        });
}
