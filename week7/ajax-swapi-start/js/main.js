//DOM ready
window.addEventListener('load', init);

//Global vars
let movieGallery;
const webserviceURL = 'https://swapi.dev/api/films/';

/**
 * Initialize application
 */
function init()
{
    movieGallery = document.querySelector('#movies');
    getMovies();
}

/**
 * Get all the movies from the Star Wars API
 */
function getMovies()
{
    fetch(webserviceURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getMoviesSuccesHandler)
        .catch(getMoviesErrorHandler);
}

/**
 * Process the data and do something cool
 *
 * @param data
 */
function getMoviesSuccesHandler(data)
{
    console.log(data);
}

/**
 * AJAX error handler
 * @param data
 */
function getMoviesErrorHandler(data)
{
    let card = createDomElement({tagName: 'div', attributes: {class: 'card error'}});
    let title = createDomElement({tagName: 'h2', attributes: {class: 'title'}, content: "Er is iets fout gegaan"});
    card.appendChild(title);
    movieGallery.appendChild(card);
}


/**
 * Generic function to create new DOM elements
 *
 * @param properties
 * @returns {Element}
 */
function createDomElement(properties)
{
    //Create the element
    let domElement = document.createElement(properties.tagName);

    //Loop through the attributes to set them on the element
    for (let prop in properties.attributes) {
        domElement.setAttribute(prop, properties.attributes[prop]);
    }

    //If any content, set the inner HTML
    if (properties.content) {
        domElement.innerHTML = properties.content;
    }

    //If a dataset is given, set the data properties
    if (properties.dataset) {
        for (let dataAttribute in properties.dataset) {
            domElement.dataset[dataAttribute] = properties.dataset[dataAttribute];
        }
    }

    //Return to use in other functions
    return domElement;
}
