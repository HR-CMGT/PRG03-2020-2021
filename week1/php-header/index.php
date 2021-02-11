<?php
//Redirect
//header("Location: http://nu.nl");
//exit;

//Force (PDF) Download
//header('Content-Type: application/pdf');
//header('Content-Disposition: attachment; filename="downloaded.pdf"');
//readfile('original.pdf');

//Disable caching for page
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

//Set specific status code to browser
//http_response_code(401);

//Get data from my database
$artists = ['artist1' => 'bla'];

//Set type to JSON
header("Content-Type: application/json");
echo json_encode($artists);
exit;
