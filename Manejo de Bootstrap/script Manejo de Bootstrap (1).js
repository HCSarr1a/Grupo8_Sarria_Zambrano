document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if(nombre === "" || email === ""){
        alert("Por favor completa los campos obligatorios.");
        return;
    }

    alert("Mensaje enviado correctamente 🚀");
    this.reset();
});