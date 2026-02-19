const yearSpan = document.querySelector("#currentyear");
yearSpan.innerHTML = new Date().getFullYear();

const lastModParagraph = document.querySelector("#lastModified");
lastModParagraph.innerHTML = `Last Modified: ${document.lastModified}`;


let messageHistory = JSON.parse(localStorage.getItem("userMessages")) || [];




const contactForm = document.querySelector("#contact form");


contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    
    const userSubmission = {
        name: document.querySelector("#fname").value,
        email: document.querySelector("#userEmail").value,
        message: document.querySelector("#message").value,
        timestamp: new Date().toLocaleString()
    };

    
    console.log("Datos capturados en el objeto:", userSubmission);
});

