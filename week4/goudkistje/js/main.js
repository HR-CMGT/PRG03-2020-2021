window.addEventListener('load', init);

//Globals
let imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let winnerImage = 'goudkistje';
let lastTarget;
let playField;
let messagePlaceholder;
let guessNumberInputField;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    //Click handler for every card
    playField = document.getElementById('playing-field');
    playField.addEventListener('click', playingFieldClickHandler);

    //Actually starting the game
    createPlayField();

    //Listen to input of chosen image by user
    let playForm = document.getElementById('play-form');
    playForm.addEventListener('submit', formSubmitHandler);

    //Fill globals which are used in more functions
    messagePlaceholder = document.getElementById('alert');
    guessNumberInputField = document.getElementById('guess-number');

    //Listen to click on alert to we can check for a restart
    messagePlaceholder.addEventListener('click', resetClickHandler);
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{
    //Empty field & shuffle current array to actually have a 'game feeling'
    playField.innerHTML = '';
    imageList = shuffleArray(imageList);

    //Loop through all the images
    for (let i = 0; i < imageList.length; i++) {
        //Create div for card
        let div = document.createElement('div');
        div.classList.add('playing-card');

        //Create & append H2 to div
        let h2 = document.createElement('h2');
        h2.innerHTML = i.toString();
        div.appendChild(h2);

        //Create image & append to div
        let img = document.createElement('img');
        img.src = 'img/vraagteken-plaatjes.png';
        img.dataset.id = i.toString();
        div.appendChild(img);

        //Append div to playing field
        playField.appendChild(div);
    }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{
    let currentTarget = e.target;

    //Return when no image is clicked
    if (currentTarget.nodeName !== "IMG") {
        return;
    } //guard class

    //If we have a stored lastTarget, put it back to show the back of the card
    if (lastTarget) {
        lastTarget.src = 'img/vraagteken-plaatjes.png';
    }

    //Replace latest clickedItem & store what is clicked latest
    currentTarget.src = 'img/' + imageList[currentTarget.dataset.id] + '.png';
    lastTarget = currentTarget;
}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{
    //Prevent default form submit
    e.preventDefault();

    //Retrieve the value from the input field
    let guessNumber = guessNumberInputField.value;

    //If the value is the right one, you won!
    if (imageList[guessNumber] === winnerImage) {
        writeFeedbackMessage(true, 'Gefeliciteerd! Je hebt het goed geraden');
    } else {
        writeFeedbackMessage(false, 'Probeer het nog eens!');
    }
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param win
 * @param text
 */
function writeFeedbackMessage(win, text)
{
    //Empty current message field
    messagePlaceholder.innerHTML = '';

    //Create new span to show the message
    let span = document.createElement('span');
    span.innerHTML = text;
    messagePlaceholder.appendChild(span);

    //Also create a restart button when we won
    if (win) {
        let button = document.createElement('button');
        button.innerHTML = "Restart";
        messagePlaceholder.appendChild(button);
    }
}

/**
 * Click handler for the alert to restart the game
 *
 * @param e
 */
function resetClickHandler(e)
{
    e.preventDefault();
    let target = e.target;

    //Check if we clicked on the actual button, else return
    if (target.nodeName !== "BUTTON") {
        return;
    }

    //Restart everything
    messagePlaceholder.innerHTML = '';
    guessNumberInputField.value = '';
    createPlayField();
    if (lastTarget) {
        lastTarget.src = 'img/vraagteken-plaatjes.png';
    }
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
