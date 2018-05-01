$.get("select.php", function (data) {
        $(".north_york")
            .append("<li>" + data.estate_type)
            .append(" " + data.start_time)
            .append(" " + data.end_time + "</li>");
    }
    , json);