<?php
/** login settup */
if (isset($_POST['submit']))
{
	$password = $_POST['password'];
	if ($password == $generated_password)
	{
		/** Loads the WordPress Environment and Template */
		
	}
	else
	{
		$error_message = "Sorry try again!";
		echo '<script language="javascript">';
		echo 'alert("'; 
		echo $error_message;
		echo '")';
		echo '</script>';
	}

}
else
{
	/** driect into login.html */
	echo file_get_contents("login.html");
}

?>
