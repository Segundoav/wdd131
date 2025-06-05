// Variables estáticas para temperatura y velocidad del viento
const temperature = 12; // °C
const windSpeed = 6; // km/h

// Mostrar año actual y fecha de modificación
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Mostrar datos en HTML
document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

// Función para calcular sensación térmica
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Mostrar sensación térmica si se cumplen las condiciones
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + " °C";
}
document.getElementById("windChill").textContent = windChill;
