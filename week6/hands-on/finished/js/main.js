// DOM ready
window.addEventListener('load', init);

// globals
let calendarElement;
let webserviceURL;

/**
 * Initialize application
 */
function init()
{
    // fill globals
    calendarElement = document.querySelector('ul#calendar');

    // webservice url normal or dynamic
    // webserviceURL = 'webservice/calendar.php';
    webserviceURL = 'webservice/calendarDynamic.php';

    getCalenderItems();
}

/**
 * fetch calendar items
 */
function getCalenderItems(){
    fetch(webserviceURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(getCalenderItemsSuccessHandler)
        .catch(getCalenderItemsErrorHandler);
}

/**
 * Calendar success handler
 * @param data
 */
function getCalenderItemsSuccessHandler(data) {
    // reset/empty calendar
    calendarElement.innerHTML = "";

    // create dom elements per item
    for(let item of data){
        createCalendarDomItem(
            item.dateFormatted,
            item.what,
            item.with,
            item.phone,
            item.where,
            item.notes
        );
    }

    // adding extra styling
    const calendarItemElements = calendarElement.querySelectorAll('li');
    for(let i = 1; i <= calendarItemElements.length; i++){
        let opacity = 1 - i * (0.9 / calendarItemElements.length);
        calendarItemElements[i - 1].style.backgroundColor = 'rgba(1, 147, 146, '+opacity+')';
    }
}

/**
 * Create calendar DOM item
 * @param itemDate
 * @param itemWhat
 * @param itemWith
 * @param itemPhone
 * @param itemWhere
 * @param itemNotes
 */
function createCalendarDomItem(
    itemDate, itemWhat, itemWith, itemPhone, itemWhere, itemNotes
){
    const itemElement = document.createElement('li');

    // tag name date for date
    createDomItem('date', itemDate, itemElement);
    // tag name h2 for title
    createDomItem('h2', itemWhat, itemElement);
    // tag name with for with
    createDomItem('with', itemWith, itemElement);
    // tag name phone for phone number
    createDomItem('phone', itemPhone, itemElement);
    // tag name where for address
    createDomItem('where', itemWhere, itemElement);
    // tag name notes for notes
    createDomItem('notes', itemNotes, itemElement);

    calendarElement.appendChild(itemElement);
}

/**
 * Calendar error handler
 * @param data
 */
function getCalenderItemsErrorHandler(data) {
    // reset/empty calendar
    calendarElement.innerHTML = "";

    // create li item with class error
    const error = createDomItem('li', 'API call niet gelukt :-(', calendarElement);
    error.classList.add('error');
}

/**
 * Create a DOM element with text
 * @param tagName
 * @param innerText
 * @param parent
 * @returns {*}
 */
function createDomItem(tagName, innerText, parent){
    const element = document.createElement(tagName);
    element.innerText = innerText;
    parent.appendChild(element);
    return element;
}