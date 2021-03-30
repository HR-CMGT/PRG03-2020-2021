window.addEventListener("load", init);

//Global variables
let movies;
let currentList;
let movieGallery;

/**
 * Initialize the application (after DOM ready)
 */
function init()
{
    movieGallery = document.getElementById('movies');
    movieGallery.addEventListener('click', movieCardClickHandler);
    getAllMovies();
}

/**
 * Get all the Star Wars movies
 */
function getAllMovies()
{
    ajaxRequest("https://swapi.dev/api/films/", showMovies);
}

/**
 * Generic AJAX handler (to prevent fetch everywhere)
 *
 * @param url
 * @param ajaxSuccessHandler
 */
function ajaxRequest(url, ajaxSuccessHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(ajaxSuccessHandler)
        .catch(ajaxErrorHandler);
}

/**
 * Process the AJAX response from the server to show the movies
 *
 * @param data
 */
function showMovies(data)
{
    //Store in global for later use
    movies = data.results;

    for (let movie of movies) {
        //Create card element
        let card = createDomElement({tagName: 'div', attributes: {class: 'card'}});

        //Create all children HTML tags for the card
        let title = createDomElement({tagName: 'h2', attributes: {class: 'title'}, content: movie.title});
        let subTitleString = movie.director + " (" + movie.release_date + ")";
        let subTitle = createDomElement({tagName: 'h3', attributes: {class: 'subtitle'}, content: subTitleString});
        let intro = createDomElement({tagName: 'p', attributes: {class: 'intro'}, content: movie.opening_crawl});
        let actorLink = createDomElement({
            tagName: 'a',
            attributes: {class: 'load-actors show-actors', href: '#'},
            dataset: {episodeId: movie.episode_id},
            content: 'Show actors'
        });

        //Append all elements to the card
        card.appendChild(title);
        card.appendChild(subTitle);
        card.appendChild(intro);
        card.appendChild(actorLink);

        //Append the card to the gallery
        movieGallery.appendChild(card);
    }
}

/**
 * Handle the click on the card
 *
 * @param e
 */
function movieCardClickHandler(e)
{
    //Prevent default behavior & save target in local variable
    e.preventDefault();
    let target = e.target;

    //If element does not have the class load-actors, exit this function
    if (!target.classList.contains('load-actors')) {
        return;
    }

    //Remove class to prevent more clicks on this item
    target.classList.remove('load-actors');

    //Create a list for an item
    currentList = createDomElement({tagName: 'ul', attributes: {class: 'actors'}});
    target.parentElement.appendChild(currentList);

    //Get the movie from the global stored data (.find is more elegant than using a custom for loop
    let episodeId = parseInt(target.dataset.episodeId);
    let movie = movies.find(function (movie) {
        return movie.episode_id === episodeId;
    });

    //Load every character URL that's present in the movie
    for (let characterUrl of movie.characters) {
        ajaxRequest(characterUrl, showCharactersByMovie);
    }
}

/**
 * Process the AJAX response from the server to show the characters
 *
 * @param data
 */
function showCharactersByMovie(data)
{
    //Create list item for every
    let li = createDomElement({tagName: 'li', attributes: {class: 'actor'}, content: data.name});
    currentList.appendChild(li);
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

/**
 * Callback after error from AJAX call
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    console.log('error', data);
    let card = createDomElement({tagName: 'div', attributes: {class: 'card error'}});
    let title = createDomElement({
        tagName: 'h2',
        attributes: {class: 'title'},
        content: "Er is iets fout gegaan, check je console"
    });
    card.appendChild(title);
    movieGallery.appendChild(card);
}
