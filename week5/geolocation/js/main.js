window.addEventListener('load', init);
let $target = null;
let $button = null;

function init()
{
    $target = document.getElementById('target');
    $button = document.getElementById('button');

    if (typeof navigator.geolocation === "undefined") {
        $target.innerText = 'Geolocation API not supported.';
        return;
    }

    $button.addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(showCurrentLocation);
        navigator.geolocation.watchPosition(showCurrentLocation);
    });
}

function showCurrentLocation(location)
{
    $button.remove();
    $target.innerHTML = (location.coords.latitude + ', ' + location.coords.longitude);
}
