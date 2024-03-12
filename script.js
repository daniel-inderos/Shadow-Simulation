document.getElementById('time').addEventListener('input', function() {
    const timeValue = this.value;
    const shadowLength = calculateShadowLength(timeValue);
    updateShadow(shadowLength);
});

function calculateShadowLength(time) {
    // Simplified calculation: convert time to an angle representation
    // This is a placeholder for a more accurate calculation based on actual solar elevation
    const hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);
    const timeInMinutes = hours * 60 + minutes;
    
    // Simplify: Assume sun is highest at noon (720 minutes) and creates shortest shadow
    // This calculation does not account for geographic location or date
    const angle = Math.abs(720 - timeInMinutes) / 4; // Simplified angle change
    const objectHeight = 20; // Object height in mm
    
    // Assuming angle is in degrees, calculate shadow length (basic trigonometry)
    // tan(angle) = opposite/adjacent -> shadow length = objectHeight / tan(angle)
    // Convert angle from degrees to radians for JavaScript Math functions
    const angleRadians = angle * (Math.PI / 180);
    const shadowLength = objectHeight / Math.tan(angleRadians);
    
    return isFinite(shadowLength) ? shadowLength : 0; // Check for division by zero
}

function updateShadow(length) {
    const shadowElement = document.getElementById('shadow');
    shadowElement.style.transform = `translateX(-50%) scaleX(${length})`;
}
