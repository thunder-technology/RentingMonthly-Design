$.get("select.php", function (data) {
    var markers = $(data).find('marker');
    var area = markers.attr("area");
    if (area === "NORTH YORK") {
        $("#north_york_sold")
            .append("<li>")
            .append('<div class="cosB">')
            .append("从" + markers.attr("start_time") + "到" + markers.attr("end_time"))
            .append('</div>')
            .append('<div> class="cosA"')
            .append('<span>')
            .append("房屋类型：" + markers.find("type").text())
            .append('</span>')
            .append("</li>")
            .append('</div>');
    }
});