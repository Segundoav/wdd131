// Get references to DOM elements
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

// Declare constants and variables
let area = 0;
const PI = 3.14159;

// Calculate area using the first radius value
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Calculate area with a different radius value
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
