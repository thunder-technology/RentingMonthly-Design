// retrieve the XML data from select.php
$.get("select.php", function (data) {
    // Iteratively go through each marker tag
    $(data).find("marker").each(function(index, value) {
        if ($(value).attr("area") === "NORTH YORK") {
            if ($(value).attr("status") === "1")
            {
                $("#north_york_sold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(value).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
            else if ($(value).attr("status") === "0")
            {
                $("#north_york_unsold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(value).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
        }
        else if ($(value).attr("area") === "MISSISAUGA") {
            if ($(value).attr("status") === "1")
            {
                $("#missisauga_sold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(value).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
            else if ($(value).attr("status") === "0")
            {
                $("#missisauge_unsold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(value).attr("start_time") + "到" + $(value).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(value).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
        }
    });
});