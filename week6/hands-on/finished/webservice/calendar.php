<?php
$calendarData = [
    [
        'dateFormatted' => "05/04/2021 01:47",
        'what' => "Repellat perferendis quos sit omnis est nam eos.",
        'with' => "bc. Brent Autar",
        'where' => "van Damring 52i 6581BZ Langeveen",
        'phone' => "038 0653348",
        'notes' => "Nisi sit reprehenderit tempora esse. Ut cumque dicta voluptatem corrupti. Et maxime debitis ullam nesciunt."
    ],
    [
        'dateFormatted' => "14/04/2021 02:16",
        'what' => "Minima quia eos dolorem consequatur ut tempora eos molestiae.",
        'with' => "Puck Reijers",
        'where' => "Timmermansstraat 3 5645KR Ternaard",
        'phone' => "06-05174984",
        'notes' => "Ipsam dolorem ut illum qui voluptatem sed praesentium repellat. Dolore deleniti fugiat in dicta velit nihil. Dolor rerum aut velit a dolorem facere dignissimos."
    ],
    [
        'dateFormatted' => "16/04/2021 19:36",
        'what' => "Eos velit non eaque esse quo.",
        'with' => "Amir de Vries",
        'where' => "Grootesteeg 2t 1141VM Asten",
        'phone' => "06-34049450",
        'notes' => "Sunt recusandae voluptas ut et vero. Molestiae expedita aut ea esse deleniti explicabo. Nihil quia dolorem est possimus quia."
    ],
    [
        'dateFormatted' => "18/04/2021 02:09",
        'what' => "Et est ratione ut harum illo.",
        'with' => "Jaylinn Aslan Msc",
        'where' => "van den Berglaan 27-99 7361TD Klundert",
        'phone' => "0800 449487",
        'notes' => "Dolorem aut mollitia illum expedita. Voluptates distinctio rem nesciunt ut perspiciatis. Vel ut porro sed aut iure eum laborum. Eaque praesentium fuga et voluptatum deleniti asperiores omnis."
    ],
    [
        'dateFormatted' => "18/04/2021 02:26",
        'what' => "Nostrum neque similique quis pariatur.",
        'with' => "Kai Sital",
        'where' => "Ismailhof 2-n 2518ER Hooge Zwaluwe",
        'phone' => "016 3765392",
        'notes' => "Esse sapiente enim exercitationem repellendus temporibus. Itaque molestiae ipsam recusandae in fugiat. Dicta dicta suscipit quae est."
    ]
];

//Set the header to tell the client some json is coming its way
header("Content-Type: application/json");
echo json_encode($calendarData);
exit;