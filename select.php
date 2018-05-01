<?php
	
	// Start XML file, create parent node
	$doc = domxml_new_doc("1.0");
	$node = $doc->create_element("markers");
	$parnode = $doc->append_child($node);

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
		while ($rows = $result->fetch_assoc())	// parsing data from query
		{
		//	echo json_encode(array("estate_type" => $rows["type"],
		//	                       "start_time" => $rows["start_time"],
		//	                       "end_time" => $rows["end_time"],
		//	                       "status" => $rows["status"]
		//	                       ));
		//  the code above is for parsing json data
			$node = $doc->create_element("marker");
 		 	$newnode = $parnode->append_child($node);

	 	 	$newnode->set_attribute("estate_type", $row['type']);
		 	$newnode->set_attribute("start_time", $row['start_time']);
  		 	$newnode->set_attribute("end_time", $row['end_time']);
 		 	$newnode->set_attribute("status", $row['status']);
			$newnode->set_attribute("address", $row['address'];
		}
	}
	else
	{
		echo "0 results";
	}
	
	$xmlfile = $doc->dump_mem();	
	echo $xmlfile;

	$con->close();
?>
