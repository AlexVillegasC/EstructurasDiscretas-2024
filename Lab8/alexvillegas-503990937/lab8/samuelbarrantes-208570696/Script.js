
document.addEventListener("DOMContentLoaded", function() {  //addEventListener("DOMContentLoaded") basicamente escucha(por decirlo así) los eventos que se le agreguen al documento 
 const nameInput    = document.getElementById("MiCuaddroNombre");    // se crea variables con los id de cada input y el div de resultado
 const phoneInput   = document.getElementById("CuadroNumero");
const resultadoDiv  = document.getElementById("resultado");
 
//para validar input
miformularioo.addEventListener("submit", function(event){  //aqui se crea el evento / este evento lo utilicé directamente con el id miformularioo del form, esto para no crea una variable, a que eran pocos eventos 
   event.preventDefault();  // se agrega el preventDefault para evitar comportamiento del formulario por defecto

   const phoneValue = phoneInput.value.trim();  //se crean las variables y se igualana las del evento anterior para poder usarlas de forma correcta en el evento de submit
   const nameValue = nameInput.value.trim(); 
   let valid = true;
    // trim es para eliminar espacios en blancos 
   //validacion nombre
    if(nameValue === "" || phoneValue ===""){   // con este if controlo que no se dejen espacios en blanco
        alert("No puede estar el espacio vacio.");
        valid = false;  // es false porque así puedo  controlar de que los datos no sean validos 
    }
     if(/\d/.test(nameValue)){
        alert("Por favor, ingrese solo letras en el Nombre"); // controlo que el nombre solo lleve letras 
        valid = false;
    } 
    //validacion telefono
     if(!/^\d+$/.test(phoneValue)){  // controlo que el telefono solo lleve numeros 
        alert("Por favor, ingrese solo numeros");
        valid = false;
     }
     if(valid) { // si es valido, pues puedo enviar los datos correctos y así mostrarlos 
        resultadoDiv.textContent = `Nombre: ${nameValue}, Telefono: ${phoneValue}`;
     }
});
});
