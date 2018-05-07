// retrieve the XML data from select.php
$.get("select.php", function (data) {
    $(data).find("marker").each(function(index, value) {

        // Iteratively go through each marker tag
        var content = ""
            .concat("<li>")
            .concat('<div class="cosA">')
            .concat('<span>')
            .concat("房屋地址: " + $(value).attr("address") + "<br>")
            .concat("房屋类型：" + $(value).attr("estate_type") + "<br>")
            .concat($(value).attr("start_time") + "至" + $(value).attr("end_time"))
            .concat('</span>')
            .concat('</div>')
            .concat("</li>");

        // 添加内容到主页
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
        else if ($(value).attr("area") === "DOWNTOWN") {
            if ($(value).attr("status") === "1") {
                $("#downtown_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#downtown_unsold").append(content);
            }
        }
        else if ($(value).attr("area") === "SCARBOROUGH") {
            if ($(value).attr("status") === "1") {
                $("#scarborough_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#scarborough_unsold").append(content);
            }
        }
        else if ($(value).attr("area") === "VAUGHAN") {
            if ($(value).attr("status") === "1") {
                $("#vaughan_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#vaughan_unsold").append(content);
            }
        }
        else if ($(value).attr("area") === "MARKHAM") {
            if ($(value).attr("status") === "1") {
                $("#markham_sold").append(content);
            }
            else if ($(value).attr("status") === "0") {
                $("#markham_unsold").append(content);
            }
        }

    });
});