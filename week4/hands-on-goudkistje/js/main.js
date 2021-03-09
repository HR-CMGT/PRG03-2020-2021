window.addEventListener('load', init);

//Global variables
let images = ['img/ballonnen.png', 'img/cars.png', 'img/goudkistje.png', 'img/planes.png'];
let currentClickedImage;
let playField;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    playField = document.getElementById('playing-field');
    playField.addEventListener('click', playingFieldClickHandler);

    createPlayField();
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{
    images = shuffleArray(images);

    for (let i = 0; i < images.length; i++) {
        //Mijn hoofdelement binnen HTML
        let card = document.createElement('div');
        card.classList.add('playing-card');

        //De kaart heeft 2 sub elementen nodig, namelijk een titel en een plaatje
        let title = document.createElement('h2');
        title.innerHTML = i.toString();
        card.appendChild(title);

        let img = document.createElement('img');
        img.setAttribute('src', 'img/vraagteken-plaatje.png');
        img.dataset.index = i.toString();
        card.appendChild(img);

        //Voeg het geheel toe aan de bestaande HTML
        playField.appendChild(card);
    }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{
    //Controleer of het ook ECHT een plaatje is, anders stop de functie gelijk!
    if (e.target.nodeName !== "IMG") {
        return;
    }

    //Als ik al iets heb aangeklikt, pas hem dan terug aan naar het vraagteken
    if (currentClickedImage) {
        currentClickedImage.setAttribute('src', 'img/vraagteken-plaatje.png');
    }

    //Haal het plaatje op uit het event en gebruik de opgeslagen index om het juiste plaatje te tonen
    let img = e.target;
    let imageIndex = img.dataset.index;
    img.setAttribute('src', images[imageIndex]);

    //Sla huidige plaatje op
    currentClickedImage = img;
}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{

}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text)
{

}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * @link http://stackoverflow.com/a/12646864
 *
 * @param array
 * @returns {*}
 */
function shuffleArray(array)
{
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
