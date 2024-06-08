// Creamos un HashMap para almacenar las películas por categoría
console.log("Ejemplo HasMap en el contexto encontrar peliculas respecto a sus categorias: ");
const peliculasPorCategoria = new Map();

// Función para agregar una película a una categoría
function agregarPelicula(categoria, pelicula) {
    if (peliculasPorCategoria.has(categoria)) {
        peliculasPorCategoria.get(categoria).push(pelicula);
    } else {
        peliculasPorCategoria.set(categoria, [pelicula]);
    }
}

// Agregamos algunas películas a sus respectivas categorías
agregarPelicula('Acción', 'Top Gun: Maverick');
agregarPelicula('Acción', 'John Wick: Chapter 4');
agregarPelicula('Comedia', 'Barbie');
agregarPelicula('Comedia', 'Oppenheimer');
agregarPelicula('Drama', 'Killers of the Flower Moon');
agregarPelicula('Drama', 'Dune: Part Two');

// Función para mostrar las películas por categoría
function mostrarPeliculasPorCategoria() {
    peliculasPorCategoria.forEach((peliculas, categoria) => {
        console.log(`Categoría: ${categoria}`);
        peliculas.forEach(pelicula => {
            console.log(`- ${pelicula}`);
        });
        console.log();
    });
}

// Mostramos las películas por categoría
mostrarPeliculasPorCategoria();