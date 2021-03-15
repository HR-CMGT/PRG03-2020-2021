window.addEventListener('load', init);
let $targetStatus = null;
let $targetRemaining = null;

function init()
{
    $targetStatus = document.getElementById('target-status');
    $targetRemaining = document.getElementById('target-remaining');
    showBatteryStatus();
}

function showBatteryStatus()
{
    if (typeof navigator.getBattery === "undefined") {
        $targetStatus.innerText = 'Bluetooth API not supported.';
        return;
    }

    navigator.getBattery().then((battery) => {
        changeStatusText(battery);
        battery.addEventListener('levelchange', () => changeStatusText(battery));
    });
}

function changeStatusText(battery)
{
    $targetStatus.innerText = ((battery.level * 100) + '%');
    let remainingTime = 'Je apparaat zal uitgaan over: ';

    if (battery.dischargingTime === Infinity) {
        remainingTime += "nooit, want je hebt je stroom aangesloten!";
    } else {
        remainingTime += (battery.dischargingTime / 60 / 60).toFixed(2) + ' uur';
    }
    $targetRemaining.innerText = remainingTime;
}
