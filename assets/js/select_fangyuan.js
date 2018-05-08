var house_info;
var townhose_info;
var condo_info;

$.get("select.php", function (data) {
    //添加内容到房源信息页面
    $(data).find("marker").each(function(index, value) {
        var fangyuan = ""
            .concat("<tr>")
                .concat("<td>" + "<input type=checkbox>" + "</td>")
                .concat("<td>" + $(value).attr("id") + "</td>")
                .concat("<td>" + '<a href="">' + $(value).attr("address") + "</a>" + "</td>")
                .concat("<td>" + $(value).attr("estate_type") + "</td>")
                .concat('<td class="am-hide-sm-only">zicarb</td>')
                .concat('<td class="am-hide-sm-only">' +  Date.now().toString() + "</td>")
                .concat('<td class="am-hide-sm-only">')
                    .concat('<div class="am-btn-toolbar">')
                        .concat('<div class="am-btn-group am-btn-group-xs">')
                            //这个按钮是出于方便后台管理，通过这个按钮可以让这项数据在前台的时候不被显示
                            .concat('<button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</button>')
                            //这个按钮是让这项数据在前台可以显示
                            .concat('<button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-chain-broken"></span>下架</button>')
                            .concat('<button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>')
                        .concat('</div>')
                    .concat('</div>')
                .concat('</td>')
            .concat("</tr>");

        //添加到列表
        var str = $(value).attr("estate_type");
        if (str === "HOUSE") {
            house_info.concat(fangyuan);
        }
        else if (str === "TOWNHOUSE")
        {
            townhose_info.concat(fangyuan);
        }
        else if(str === "CONDO")
        {
            townhose_info.concat(fangyuan);
        }
    });
});

function goToPage(str)
{
    $(document).ready(function () {
        if (str === "")
        {
            $("#fangyuan")
                .change(house_info)
                .append(townhose_info)
                .append(condo_info);
            console.log("ALLTYPE SUCCESS!");
        }
        if (str === "house") {
            $("#fangyuan").change(house_info);
            console.log("house_info SUCCESS!");
        }
        else if (str === "townhouse")
        {
            $("#fangyuan").change(townhose_info);
        }
        else if(str === "condo")
        {
            $("#fangyuan").change(condo_info);
        }
    });
}

