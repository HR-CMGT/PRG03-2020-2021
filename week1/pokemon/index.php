<?php
$jsonData = file_get_contents("http://pokeapi.co/api/v2/pokedex/1/");
$data = json_decode($jsonData);
print_r($data);
