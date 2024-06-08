
let librosFavoritos = new Map(); // HashMap de libros favoritos con su nombre y autor (usa clave-valor)

librosFavoritos.set("El Señor de los Anillos", "J.R.R. Tolkien"); // Agregar un libro y su autor al HashMap
librosFavoritos.set("Cien años de soledad", "Gabriel García Márquez");
librosFavoritos.set("Harry Potter", "J.K. Rowling");

// v Accede al autor de un libro específico y lo mostra en la consola
console.log(librosFavoritos.get("El Señor de los Anillos")); // Autor: J.R.R. Tolkien

// v Itera sobre el HashMap para mostrar todos los libros y sus autores
console.log("Lista de libros favoritos:");

librosFavoritos.forEach((autor, libro) => { // Itera sobre cada par clave-valor en el HashMap

  console.log(`${libro} - ${autor}`); // Imprime el nombre del libro y su autor
 
});