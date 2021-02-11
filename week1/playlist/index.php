<?php
//Load file contents in PHP var
$playlist = file_get_contents("playlist.json");
//print_r($playlist);
//exit;

//Decode JSON to PHP object
$playlistJson = json_decode($playlist);

//echo "<pre>";
//print_r($playlistJson);
//echo "</pre>";

//Echo properties directly
echo $playlistJson->collection_from . "<br/>";
echo $playlistJson->artists[0]->albums[0]->title . "<br/>";

//Loop through list of albums from all artist & print title
foreach ($playlistJson->artists as $artist) {
    foreach ($artist->albums as $album) {
        echo $album->title . "<br>";
    }
}
