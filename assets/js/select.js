// retrieve the XML data from select.php
$.get("select.php", function (data) {
    // Iteratively go through each marker tag
    $(data).find("marker").each(function(index, value) {
        var content = ""
            .concat("<li>")
            .concat('<div class="cosA">')
            .concat('<span>')
            .concat("房屋类型：" + $(value).attr("estate_type") + "房屋地址: " + $(value).attr("address") + "<br>")
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


        //添加内容到房源信息页面
        var fangyuan = ""
                .concat("<tr>")
                .concat("<td>" + "<input type=checkbox>" + "</td>")
                .concat("<td>" + $(value).attr("id") + "</td>")
                .concat("<td>" + "<a href=\"\">" + $(value).attr("address") + "</a>" + "</td>")
                .concat("<td>" + $(value).attr("estate_type") + "</td>")
                .concat("<td class=\"am-hide-sm-only\">" + zicarb +"</td>")
                .concat("<td class=\"am-hide-sm-only\">" +  Date.now() + "</td>")
                .concat("</tr>");
        //添加到列表
        $("#fangyuan").append(fangyuan);
    });
});