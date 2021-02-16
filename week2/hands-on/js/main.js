// variabelen en datatypes

const artist = "Gorillaz";              // string
const album = "Plastic Beach";
let grammy = false;                     // boolean
let duration = 60;                      // number
let tracks = ["Clint Eastwood", "Feel Good Inc", "Dirty Harry"];    // array


function logInfo() {
    console.log(`Dit album heet ${album} en is van ${artist}`);
}

function checkGrammy() {
    // IF statements
    if (duration < 30 || tracks.length < 5) {
        console.log("Dit is een EP");
    } else {
        console.log("Dit is een album");
    }
    if (duration < 30 || (tracks.length > 3 && tracks.length < 10)) {

    }
}

function logTracks() {
    //for (let counter = 0; counter < tracks.length; counter++) {
    //    console.log(`${counter} is ${tracks[counter]}`);
    //}

    for(let track of tracks) {
        console.log(track)
    }
}

function addTrack(newTrack) {
    tracks.push(newTrack);
    console.log(`Er zijn ${tracks.length} nummers`);
    logTracks();
    checkGrammy();
}

logInfo();
addTrack("Rhinestone eyes");
addTrack("On Melancholy Hill");