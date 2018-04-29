<?php
	$servername = "localhost";
	$username = "root";
	$pass = "rentingmonthly";

	$con = new mysqli($servername, $username, $pass);

	if ($con->connect_error)
		die("Connection failed" . $con->connect_error);
	
	$sql = "SELECT * FROM estate WHERE status = FALSE";
	$result = $con->query($sql);

	if ($result-> num_rows > 0)
		while ($rows = $result->fetch_assoc())
			echo "<br> Type: " . $rows["type" ] .
				 "Start Time: " . $rows["start_time"] .
				 "End Time: " . $rows["end_time"];
	else
		echo "0 results";
	
	$con->close();
?>
