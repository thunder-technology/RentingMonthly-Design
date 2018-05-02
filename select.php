<?php
	
	// Start XML file, create parent node
	$doc=new DOMDocument();
	$node = $doc->createElement("markers");
	$parnode = $doc->appendChild($node);

	// setup the mysql connection
	$servername = "localhost";
	$username = "root";
	$pass = "rentingmonthly";
	$db = "house_info";

	$con = new mysqli($servername, $username, $pass, $db);

	if ($con->connect_error)
		die("Connection failed" . $con->connect_error);
	// connect to query
	$sql = "SELECT * FROM estate WHERE 1";
	$result = $con->query($sql);  // apply query
	if (!$result)
	{
		die('Invalid query: ' . mysql_error());
	}
	
	header("Content-type: text/xml");

	if ($result-> num_rows > 0)
	{
		while ($rows = $result->fetch_assoc()) {
		//	echo json_encode(array("estate_type" => $rows["type"],
		//	                       "start_time" => $rows["start_time"],
		//	                       "end_time" => $rows["end_time"],
		//	                       "status" => $rows["status"]
		//	                       ));
		//  the code above is for parsing json data
			$node = $doc->createElement("marker");
 		 	$newnode = $parnode->appendChild($node);

	 	 	$newnode->setAttribute("estate_type", $rows['type']);
		 	$newnode->setAttribute("start_time", $rows['start_time']);
  		 	$newnode->setAttribute("end_time", $rows['end_time']);
 		 	$newnode->setAttribute("status", $rows['status']);
			$newnode->setAttribute("address", $rows['address']);
		}
	}
	else
	{
		echo "0 results";
	}
	
	$xmlfile = $doc->saveXML();	
	echo $xmlfile;

	$con->close();
?>
