
document.getElementById("buttonRegistro").addEventListener("click", function() {
    var nombre = document.getElementById("miNombreTxt").value;
    var mail = document.getElementById("miCorreoTxt").value;

    if(nombre === "" || mail === "" ){
        //alert("Por favor, rellene todos los campos!!");
        mostrarAlerta();
        return;
    }

    console.log("Valor ingresado: " + nombre);
    console.log("Valor ingresado: " + mail);

    var nombreParrafo = document.getElementById("show1");
    nombreParrafo.textContent = "Nombre: " + nombre;

    var mailParrafo = document.getElementById("show2");
    mailParrafo.textContent = "E-mail:   " + mail;
    
});

function mostrarAlerta() {
    document.getElementById('alertaPersonalizada').classList.add('visible');
}

function cerrarAlerta() {
    document.getElementById('alertaPersonalizada').classList.remove('visible');
}

