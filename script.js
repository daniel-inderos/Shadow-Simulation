document.getElementById('startBtn').addEventListener('click', function() {
    // Enable the time input and focus on it
    document.getElementById('time').disabled = false;
    document.getElementById('time').focus();
    this.disabled = true; // Disable the Enter button after it's clicked
});

document.getElementById('time').addEventListener('input', function() {
    const timeValue = this.value;
    const shadowLength = calculateShadowLength(timeValue);
    updateShadow(shadowLength);
});

function calculateShadowLength(time) {
    // The calculation logic remains the same as previously provided
    const hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);
    const timeInMinutes = hours * 60 + minutes;
    const angle = Math.abs(720 - timeInMinutes) / 4;
    const objectHeight = 20; // Object height in mm
    const angleRadians = angle * (Math.PI / 180);
    const shadowLength = objectHeight / Math.tan(angleRadians);
    return isFinite(shadowLength) ? shadowLength : 0;
}

function updateShadow(length) {
    // Update the shadow's scale based on the length calculated
    const shadowElement = document.getElementById('shadow');
    shadowElement.style.transform = `translateX(-50%) scaleX(${length})`;
}
