// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el año actual y lo inserta en el span con id="currentyear"
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Obtiene la fecha de la última modificación del documento
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Última modificación: ${lastModified}`;
});
