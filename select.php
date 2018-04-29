<?php
	$servername = "localhost";
	$username = "root";
	$pass = "rentingmonthly";
	$db = "house_info";

	$con = new mysqli($servername, $username, $pass, $db);

	if ($con->connect_error)
		die("Connection failed" . $con->connect_error);
	
	$sql = "SELECT * FROM estate WHERE status = FALSE";
	$result = $con->query($sql);  // apply query
	
	$output = "";
	if ($result-> num_rows > 0)
	{
		while ($rows = $result->fetch_assoc())	// parsing data from query
		{
			$output = '<br><p>';
			$output = $output . "Type: " . $rows["type" ] .
			 				"Start Time: " . $rows["start_time"] .
				 			"End Time: " . $rows["end_time"];
			$output = $output . '</p>';
		}
	}
	else
	{
		$output = "0 results";
	}
	
	$con->close();
?>
