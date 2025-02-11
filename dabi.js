// Créer un bouton
let bouton = document.createElement("button");
bouton.textContent = "Click Moi";
bouton.style.padding = "10px 20px";
bouton.style.fontSize = "18px";
bouton.style.backgroundColor = "green";
bouton.style.color = "white";
bouton.style.border = "none";
bouton.style.borderRadius = "5px";
bouton.style.cursor = "pointer";
bouton.style.transition = "0.3s";

bouton.addEventListener("mouseout", function () {
    bouton.style.backgroundColor = "#007bff";
});

// Ajouter l'événement au clic
bouton.addEventListener("click", function () {
    alert("Bienvenue sur mon site !");
});

// Ajouter le bouton au body
document.body.appendChild(bouton);
