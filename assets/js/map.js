
var map; // global variable

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(43.6532, -79.3832),
        mapTypeId: 'terrain'
    });

    setTimeout(geocode(), 1000);
}

function geocode() {
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
            // 异步编程，数据通过ajax添加到map
                .then(
                    function (response) {
                        // 提取坐标数据
                        var location = response.data.results[0].geometry.location;
                        var contentString = ""
                            .concat('地址: ' + address + '<br>')
                            .concat('租期: ' + $(markerElem).attr('start_time') + "至" + $(markerElem).attr('end_time'));
                        var infoWindow = new google.maps.InfoWindow({
                                content : contentString
                            });
                        var marker = new google.maps.Marker({
                            map: map,
                            position: location,
                            draggable: true,
                            animation: google.maps.Animation.DROP
                        });
                        marker.addListener('click', function () {
                            if (marker.getAnimation() !== null) {
                                marker.setAnimation(null);
                            } else {
                                marker.setAnimation(google.maps.Animation.BOUNCE);
                            }
                            infoWindow.open(map, marker);
                        });
                    }, function (error) {
                        console.log(error);
                    })
        });
    });
}







