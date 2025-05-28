// Obtener las referencias a los elementos del DOM
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

// Declarar constantes y variables
let area = 0;
const PI = 3.14159;

// Calcular área con el primer valor de radio
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Calcular área con otro valor de radio
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
