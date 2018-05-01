$.get("select.php", function (data) {
        $(".north_york")
            .alert("Successfully implemented!")
            .append("<li>" + data.estate_type)
            .append(" " + data.start_time)
            .append(" " + data.end_time + "</li>");
    }
    , json);