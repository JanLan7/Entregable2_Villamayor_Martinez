document.addEventListener("DOMContentLoaded", function() {
    mostrarUltimasFrasesSesion();

    function mostrarUltimasFrasesSesion() {
        let frasesSesion = JSON.parse(localStorage.getItem("frases")) || [];
        let lista = document.getElementById("ultimasFrases");
        lista.innerHTML = "";
        frasesSesion.forEach(function(frase) {
            let li = document.createElement("li");
            li.textContent = frase;
            lista.appendChild(li);
        });
    }
});