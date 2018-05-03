// retrieve the XML data from select.php
$.get("select.php", function (data) {
    // Iteratively go through each marker tag
    $(data).find("marker").each(function(index, value) {
        var content = ""
            .concat("<li>")
            .concat('<div class="cosB">')
            .concat("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
            .concat('</div>')
            .concat('<div class="cosA">')
            .concat('<span>')
            .concat("房屋类型：" + $(value).attr("type"))
            .concat('</span>')
            .concat('</div>')
            .concat("</li>");
        
        if ($(value).attr("area") === "NORTH YORK") {
            if ($(value).attr("status") === "1") {
                $("#north_york_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#north_york_unsold").append(content);
            }
        }
        else if ($(value).attr("area") === "MISSISAUGA") {
            if ($(value).attr("status") === "1") {
                $("#missisauga_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#missisauge_unsold").append(content);
            }
        }
    });
});