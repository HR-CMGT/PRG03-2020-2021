window.addEventListener('load', init);
let $form = null;
let $nameField = null;
let $ageField = null;

function init()
{
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    $form = document.getElementById('form');
    $nameField = document.getElementById('name');
    $ageField = document.getElementById('age');

    fillFieldsFromLocalStorage();
    $form.addEventListener('submit', submitHandler);
}

function fillFieldsFromLocalStorage()
{
    if (localStorage.getItem('name') !== null) {
        $nameField.value = localStorage.getItem('name');
        $ageField.value = localStorage.getItem('age');
    }
}

function submitHandler(e)
{
    e.preventDefault();
    localStorage.setItem('name', $nameField.value);
    localStorage.setItem('age', $ageField.value);
}
