//encontrar un ejemplo que sea hasmap en js, que sea más útil con hasmap

// Se crea una función para registrar el último mensaje de un usuario
function registrarMensaje(usuarios, nombre, mensaje) {
    // Si el usuario no existe en la tabla hash, agregarlo con un objeto vacío
    if (!usuarios[nombre]) {
        usuarios[nombre] = {};
    }
    
    // Agregar el mensaje al objeto del usuario
    usuarios[nombre].ultimoMensaje = mensaje;

    //El texto "ultimoMensaje" es el hash
}

// Crear una función para obtener el último mensaje de un usuario
function obtenerUltimoMensaje(usuarios, nombre) {
    // Si el usuario existe en la tabla hash, devolver su último mensaje
    if (usuarios[nombre] && usuarios[nombre].ultimoMensaje) {
        return usuarios[nombre].ultimoMensaje;
    }
    // Si el usuario no existe o no tiene mensajes, devolver un mensaje predeterminado
    return "El usuario no tiene mensajes recientes.";
}

// Crear una tabla hash para almacenar usuarios y sus últimos mensajes
let usuarios = {};

// Registrar algunos mensajes
registrarMensaje(usuarios, "Alice", "Hola, ¿cómo estás?");
registrarMensaje(usuarios, "Bob", "Estoy bien, ¿y tú?");
registrarMensaje(usuarios, "Charlie", "¡Hola a todos!");

// Obtener y mostrar el último mensaje de algunos usuarios
console.log(obtenerUltimoMensaje(usuarios, "Alice"));  // Hola, ¿cómo estás?
console.log(obtenerUltimoMensaje(usuarios, "Bob"));    // Estoy bien, ¿y tú?
console.log(obtenerUltimoMensaje(usuarios, "David"));  // El usuario no tiene mensajes recientes.