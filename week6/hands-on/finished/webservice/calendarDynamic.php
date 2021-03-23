<?php
// using faker API library
require_once('faker/autoload.php');
$faker = Faker\Factory::create('nl_NL');

// globals
$calendarItems = 5;
$calendarData = [];
$lastDate = new DateTime(); // now

for($i = 0; $i < $calendarItems; $i++){
    $calendarData[$i] = createCalendarItem($faker, $lastDate);
    $lastDate = $calendarData[$i]['date'];
}

function createCalendarItem($faker, DateTime $startDate){
    $fakeDate = $faker->dateTimeBetween($startDate, '+1 month');
    $fakeData = [
        'date' => $fakeDate,
        'dateFormatted' => $fakeDate->format('d/m/Y H:i'),
        'what' => $faker->sentence(),
        'with' => $faker->name(),
        'where' => $faker->address(),
        'phone' => $faker->phoneNumber(),
        'notes' => $faker->paragraph()
    ];
    return $fakeData;
}

//Set the header to tell the client some json is coming its way
header("Content-Type: application/json");
echo json_encode($calendarData);
exit;