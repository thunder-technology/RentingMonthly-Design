// retrieve the XML data from select.php
$.get("select.php", function (data) {
    // Iteratively go through each marker tag
    $(data).find("marker").eq(1).each(function() {
        if ($(this).attr("area") === "NORTH YORK") {
            if ($(this).attr("status") === "1")
            {
                $("#north_york_sold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(this).attr("start_time") + "到" + $(this).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(this).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
            else if (status === "0")
            {
                $("#north_york_unsold")
                    .append("<li>")
                    .append('<div class="cosB">')
                    .append("从" + $(this).attr("start_time") + "到" + $(this).attr("end_time"))
                    .append('</div>')
                    .append('<div> class="cosA"')
                    .append('<span>')
                    .append("房屋类型：" + $(this).find("type").text())
                    .append('</span>')
                    .append("</li>")
                    .append('</div>');
            }
        }
    });
});