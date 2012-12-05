<?php
require_once("Face.php");
$client = new Face("61a4ywssdguhxrkr0xukbitm6waz2r", "xauegnekfsbmcv88bl0aqs1dubn1cz");



// A sample function call. These parameters are not properly filled in.
// See Face.php to find all function names and parameters.
$response = $client->detect("http://danshields.com/webcam/webcam.jpg");


print "<h1>response for this image</h1>";
print "<img src=\"http://danshields.com/webcam/webcam.jpg\" /><br /><br />";
// now you can do something with the response.
echo json_encode($response);

function prp($data=array()){
	echo '<pre>';
	print_r($data);
	echo '</pre>';
}

?>