
let asignaciones = [
    ["Angelica", "Tarea1"],
    ["Carlos", "Tarea2"],
    ["Angelica", "Tarea3"],
    ["Carlos", "Tarea4"],
    ["Greilyn", "Tarea5"],
    ["Carlos", "Tarea6"]
];

function contarTareas(asignaciones) {
    // Crear un nuevo mapa para almacenar la cantidad de tareas por empleado
    let mapa = new Map();

    for (let [empleado, tarea] of asignaciones) {
        // Verificar si el empleado ya está en el mapa
        if (mapa.has(empleado)) {
            // Si el empleado ya está en el mapa, incrementar el contador de tareas en 1
            mapa.set(empleado, mapa.get(empleado) + 1);
        } else {
            // Si el empleado no está en el mapa, añadirlo con un contador de 1
            mapa.set(empleado, 1);
        }
    }

    // Devolver el mapa con las tareas por empleado
    return mapa;
}

let resultado = contarTareas(asignaciones);
console.log(resultado); // Map { 'Alice' => 3, 'Bob' => 2, 'Charlie' => 1 }
