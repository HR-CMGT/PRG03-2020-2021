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
    webserviceURL = 'webservice/calendar.php';
    // webserviceURL = 'webservice/calendarDynamic.php';

    getCalenderItems();
}

/**
 * fetch calendar items
 */
function getCalenderItems(){

}

/**
 * Calendar success handler
 * @param data
 */
function getCalenderItemsSuccessHandler(data) {
    // reset/empty calendar
    calendarElement.innerHTML = "";

    // create dom elements per item


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

    // tag name h2 for title

    // tag name with for with

    // tag name phone for phone number

    // tag name where for address

    // tag name notes for notes


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