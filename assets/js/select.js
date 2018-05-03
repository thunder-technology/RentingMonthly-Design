// retrieve the XML data from select.php
$content = "";
$.get("select.php", function (data) {
    // Iteratively go through each marker tag
    $(data).find("marker").each(function(index, value) {
        $content
            .append("<li>")
            .append('<div class="cosB">')
            .append("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
            .append('</div>')
            .append('<div class="cosA">')
            .append('<span>')
            .append("房屋类型：" + $(value).attr("type").text())
            .append('</span>')
            .append('</div>')
            .append("</li>");

        if ($(value).attr("area") === "NORTH YORK") {
            alert($(value).attr("status"));
            if ($(value).attr("status") === "1") {
                $("#north_york_sold").append($content);
            }
            else if ($(value).attr("status") === "0") {
                $("#north_york_unsold").append($content);
            }
        }
        else if ($(value).attr("area") === "MISSISAUGA") {
            if ($(value).attr("status") === "1") {
                $("#missisauga_sold").append($content);
            }
            else if ($(value).attr("status") === "0") {
                $("#missisauge_unsold").append($content);
            }
        }
    });
});