$.get("select.php", function (data) {
        $("#north_york")
            .append(" " + data.estate_type)
            .append(" " + data.start_time)
            .append(" " + data.end_time);
    }
    , json);