<?php
	$servername = "localhost";
	$username = "root";
	$pass = "rentingmonthly";
	$db = "house_info";

	$con = new mysqli($servername, $username, $pass, $db);

	if ($con->connect_error)
		die("Connection failed" . $con->connect_error);

	$sql = "SELECT * FROM estate";
	$result = $con->query($sql);  // apply query

	if ($result-> num_rows > 0)
	{
		while ($rows = $result->fetch_assoc())	// parsing data from query
		{
			echo json_encode(array("estate_type" => $rows["type"],
			                       "start_time" => $rows["start_time"],
			                       "end_time" => $rows["end_time"],
			                       "status" => $rows["status"]
			                       ));
		}
	}
	else
	{
		echo "0 results";
	}

	$con->close();
?>
