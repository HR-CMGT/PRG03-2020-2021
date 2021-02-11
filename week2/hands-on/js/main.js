let a = 4
let b = a * 2
let c = 10
let lessonComplete = false
const artist = "Babymetal"

console.log(`Hello world`)
console.log(artist)
console.log(`Artist name ${artist}`)

if(a > b && a < c) {
    console.log("A is groter dan B en kleiner dan C")
} 
if(lessonComplete) {
    console.log("De les is afgelopen")
} else {
    console.log("De les is nog niet afgelopen")
}
if(artist === "Babymetal") {
    console.log("Sugooiiiiii")
}
if (artist !== "Babymetal") {
    console.log("Boring!")
}

let tracks = ["Chocolate", "Karate", "Catch me if you can"]
console.log(`Er zijn ${tracks.length} tracks`)
console.log(`Track 1 is ${tracks[0]}`)



for(let i = 0; i < tracks.length; i++) {
    console.log(tracks[i])
}

function logArtist() {
    console.log(artist)
}

logArtist()

function logTrack(trackNumber){
    console.log(tracks[trackNumber])
}

logTrack(0)
logTrack(1)