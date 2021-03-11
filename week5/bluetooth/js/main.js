window.addEventListener('load', init);

function init()
{
    document.getElementById('button').addEventListener('click', readBatteryLevel);
}

function readBatteryLevel()
{
    let $target = document.getElementById('target');

    if (typeof navigator.bluetooth === "undefined") {
        $target.innerText = 'Bluetooth API not supported.';
        return;
    }

    navigator.bluetooth.requestDevice({
        filters: [{
            services: ['battery_service']
        }]
    })
        .then(function (device) {
            return device.gatt.connect();
        })
        .then(function (server) {
            return server.getPrimaryService('battery_service');
        })
        .then(function (service) {
            return service.getCharacteristic('battery_level');
        })
        .then(function (characteristic) {
            return characteristic.readValue();
        })
        .then(function (value) {
            $target.innerHTML = 'Battery percentage is ' + value.getUint8(0) + '.';
        })
        .catch(function (error) {
            $target.innerText = error;
        });
}
