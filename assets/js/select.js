$.get("select.php", function (data) {
    xml = $.parseXML(data),
        $data = $( xml ),
        $markers = $data.find("marker"); // get all option nodes
    var area = $markers.attr("area");
    alert(area);
    console.log(area);
}, json);

if (area === "NORTH YORK") {
    $("#north_york_sold")
        .append("<li>")
        .append('<div class="cosB">')
        .append("from" + markers.find("start_time").text() + "to" + markers.find("end_time").text())
        .append('</div>')
        .append('<div> class="cosA"')
        .append('<span>')
        .append("房屋类型：" + markers.find("type").text())
        .append('</span>')
        .append("</li>");
}