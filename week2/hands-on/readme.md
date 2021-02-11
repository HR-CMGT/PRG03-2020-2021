# Week 2 : Herhaling Javascript Basics

We gaan kijken naar de javascript principes uit Programmeren 1. 

- [Project klaar zetten in Webstorm en openen in localhost](./settings.md)

<br>
<br>
<br>

# Javascript

## Variabelen en data types

```javascript
let a = 4
let b = a * 2
let c = 10
let lessonComplete = false
const artist = "Babymetal"
```
Gebruik **string templates** met backtick en `${}` om variabelen en strings te combineren.


```javascript
console.log(`Hello world`)
console.log(artist)
console.log(`Artist name ${artist}`)
```
## IF statements

```javascript
if(a > b && a < c) {
    console.log("A is groter dan B en kleiner dan C")
} 
if(lessonComplete) {
    console.log("De les is afgelopen")
} else {
    console.log("De les is nog niet afgelopen")
}
if(artist == "Babymetal" || artist == "Bridear") {
    console.log("Sugooiiiiii")
}
if (artist != "Babymetal") {
    console.log("Boring!")
}
```
## Arrays
```javascript
let tracks = ["Chocolate", "Karate", "Catch me if you can"]
console.log(`Er zijn ${tracks.length} tracks`)
console.log(`Track 1 is ${tracks[0]}`)

tracks.push("Yabai")
tracks[1] = "Sugoi"
```

## FOR Loops

```javascript
for(let i = 0; i < tracks.length; i++) {
    console.log(tracks[i])
}
```

## Functions

```javascript
function logArtist() {
    console.log(artist)
}

logArtist()

function logTrack(tracknumber){
    console.log(tracks[tracknumber])
}

logTrack(0)
logTrack(1)
```

<br>
<br>
