document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miformularioo");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById("MiCuaddroNombre").value.trim();
        const telefono = document.getElementById("CuadroNumero").value.trim();

        if (nombre === "" || telefono === "") {
            resultadoDiv.textContent = "Por favor, complete todos los campos.";
        } else {
            resultadoDiv.textContent = `Nombre: ${nombre}, Teléfono: ${telefono}`;
        }
    });
});
