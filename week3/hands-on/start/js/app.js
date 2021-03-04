const cardsContainer = document.querySelector("#cards")

const cats = [
    { name: "Dr. Fluffenstein", image: "./images/cat1.jpg", movie:"Avengers" },
    { name: "Whiskers", image: "./images/cat2.jpg" },
    { name: "Goose", image: "./images/cat3.jpg" },
    { name: "Whiskers", image: "./images/cat4.jpg" }
]

function addCard(cat){
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
    cardsContainer.appendChild(cardDiv)

    const img = document.createElement("img")
    img.src = cat.image
    cardDiv.appendChild(img)

    const nameDiv = document.createElement("div")
    nameDiv.innerText = cat.name
    cardDiv.appendChild(nameDiv)

    if(cat.movie) {
        nameDiv.innerText = cat.name + " movie: " + cat.movie
    }
}

function addCards() {
    for (let cat of cats) {
        addCard(cat)
    }
}

addCards()
addCards()
