function initMap() {
    $("#map").slideToggle('slow', function () {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(43.6532, -79.3832),
            mapTypeId: 'terrain'
        });
    });

    var infoWindow = new google.maps.InfoWindow;
    //获取数据库的所有租房信息
    $.get('select.php', function(data) {
        // 分析xml数据
        var markers = $(data).find('marker');
        // 用geocode分析每一个数据，转化为坐标
        Array.prototype.forEach.call(markers, function(markerElem) {
            // 提取地址数据
            var address = $(markerElem).attr('address');
            // 地址 -> 坐标
            axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                params: {
                    address : address,
                    key : 'AIzaSyDao1DC4cHMICPAzOH93K4nZaswFnk4wP4'
                }
            })
                // 异步编程，数据通过ajax异步地添加到map
                .then(
                    function (response) {
                        // 这里data是response数据
                        // 提取坐标数据

                        var location = data.data.results[0].geometry.location;
                        console.log(location);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: location,
                            draggable: true,
                            animation: google.maps.Animation.DROP
                        });
                    }
                , function (error) {
                    console.log(error);
                })
        });
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
