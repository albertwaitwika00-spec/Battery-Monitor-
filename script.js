let batteryLevel = 67;

// Function to update the battery on the screen
function updateBattery() {
    let fill = document.getElementById("batteryFill");
    let statusText = document.getElementById("statusText");
    let statusText2 = document.getElementById("statusText2");
    let healthText = document.getElementById("healthText");
    let healthText2 = document.getElementById("healthText2");
    let levelText = document.getElementById("levelText");

    // Update the width and text
    fill.style.width = batteryLevel + "%";
    fill.innerHTML = batteryLevel + "%";
    levelText.innerHTML = batteryLevel + "%";

    // Check STATUS
    let status = "";
    if (batteryLevel == 0) {
        status = "Empty";
        fill.style.backgroundColor = "red";
    } else if (batteryLevel >= 1 && batteryLevel <= 20) {
        status = "Critical";
        fill.style.backgroundColor = "red";
    } else if (batteryLevel >= 21 && batteryLevel <= 50) {
        status = "Low Battery";
        fill.style.backgroundColor = "orange";
    } else if (batteryLevel >= 51 && batteryLevel <= 80) {
        status = "Good";
        fill.style.backgroundColor = "green";
    } else if (batteryLevel >= 81 && batteryLevel <= 100) {
        status = "Fully Charged";
        fill.style.backgroundColor = "blue";
    }

    statusText.innerHTML = status;
    statusText2.innerHTML = status;

    // Check HEALTH
    let health = "";
    if (batteryLevel <= 20) {
        health = "Poor";
    } else if (batteryLevel <= 50) {
        health = "Fair";
    } else if (batteryLevel <= 80) {
        health = "Good";
    } else {
        health = "Excellent";
    }

    healthText.innerHTML = health;
    healthText2.innerHTML = health;
}

// CHARGE button - add 10%
function chargeBattery() {
    if (batteryLevel >= 100) {
        alert("Battery Fully Charged!");
    } else {
        batteryLevel = batteryLevel + 10;
        if (batteryLevel > 100) {
            batteryLevel = 100;
        }
        updateBattery();
    }
}

// DRAIN button - remove 10%
function drainBattery() {
    if (batteryLevel <= 0) {
        alert("Battery Empty!");
    } else {
        batteryLevel = batteryLevel - 10;
        if (batteryLevel < 0) {
            batteryLevel = 0;
        }
        updateBattery();
    }
}

// RESET button - back to 67%
function resetBattery() {
    batteryLevel = 67;
    updateBattery();
}


updateBattery();