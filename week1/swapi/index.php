<?php
$jsonData = file_get_contents('http://swapi.dev/api/films/');
$data = json_decode($jsonData);
print_r($data);
