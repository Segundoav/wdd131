const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "images/tolivos.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah", dedicated: "1888, May, 21", area: 74792, imageUrl: "images/tmolina.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah", dedicated: "2015, June, 7", area: 96630, imageUrl: "images/ttrujillo.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "images/tarequipa.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland", dedicated: "1974, November, 19", area: 156558, imageUrl: "images/tcusco.jpg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "images/tchiclayo.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "images/thuancayo.jpg" },
    { templeName: "Trujillo Peru", location: "Trujillo, Peru", dedicated: "2015, June, 21", area: 28200, imageUrl: "images/tiquitos.jpg" },
    { templeName: "Arequipa Peru", location: "Arequipa, Peru", dedicated: "2019, December, 15", area: 26969, imageUrl: "images/tchorrillos.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah", dedicated: "1893, April, 6", area: 382207, imageUrl: "images/tpiura.jpg" }
];

function displayTemples(filteredList) {
    const grid = document.querySelector("#templeGrid");
    grid.innerHTML = ""; 
    filteredList.forEach(temple => {
        const card = document.createElement("figure");
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        grid.appendChild(card);
    });
}

// Lógica de Filtros
document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        const filter = e.target.dataset.filter;
        let filtered;
        if (filter === "old") filtered = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900);
        else if (filter === "new") filtered = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000);
        else if (filter === "large") filtered = temples.filter(t => t.area > 90000);
        else if (filter === "small") filtered = temples.filter(t => t.area < 10000);
        else filtered = temples;
        displayTemples(filtered);
    });
});

displayTemples(temples);
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;