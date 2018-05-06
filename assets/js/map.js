//获取数据库的所有租房信息
$.get("select.php", function (data) {
    $(data).find("marker").each(function(index, value) {
        var content = ""
            .concat();

        // 搜索所有没被租出的房屋
        if ($(value).attr("status") === "0") {
            // 获取地址
            address = $(value).attr("address");
            results.add(address);
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

}

function geocode() {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address : "5 sheppard Ave E.",
            key : 'AIzaSyDao1DC4cHMICPAzOH93K4nZaswFnk4wP4'
        }
    })
        .then(function(response)
        {
            // Log Full response
            location = response.data.results[0].location;
            console.log(location);
        })
        .catch(function (error) {
            console.log(error);
        });
}

geocode();

