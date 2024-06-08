
// Se define la clase SistemaAsistencia
class SistemaAsistencia {
    // El constructor inicializa un Map vacío para almacenar la asistencia de los estudiantes
    constructor() {
        this.asistencia = new Map();
    }

    // El método marcarAsistencia toma un estudiante y una fecha como argumentos
    // Si el estudiante ya está en el Map, se agrega la fecha a su array de asistencia
    // Si el estudiante no está en el Map, se agrega al Map con un nuevo array que contiene la fecha
    marcarAsistencia(estudiante, fecha) {
        if (!this.asistencia.has(estudiante)) {
            this.asistencia.set(estudiante, []);
        }
        this.asistencia.get(estudiante).push(fecha);
    }

    // El método obtenerRegistro toma un estudiante como argumento y devuelve su registro de asistencia
    // Si el estudiante no está en el Map, se devuelve null
    obtenerRegistro(estudiante) {
        if (this.asistencia.has(estudiante)) {
            return this.asistencia.get(estudiante);
        }
        return null;
    }

   // Método para imprimir la asistencia de todos los estudiantes
imprimirAsistenciaTodos() {
    // Recorremos el HashMap 'asistencia' con un bucle forEach
    // 'fechas' es el array de fechas de asistencia de cada estudiante
    // 'estudiante' es la clave del HashMap, que en este caso es el nombre del estudiante
    this.asistencia.forEach((fechas, estudiante) => {
        // Imprimimos el nombre del estudiante y sus fechas de asistencia
        // Usamos 'join' para convertir el array de fechas en una cadena, separando las fechas con comas
        console.log(`Registro de asistencia de ${estudiante}: ${fechas.join(', ')}`);
    });
}
}

// Se crea una instancia del sistema de asistencia
let sistema = new SistemaAsistencia();

// Se marcan algunas asistencias de los estudiantes
sistema.marcarAsistencia('Juan', '2024-05-01');
sistema.marcarAsistencia('Laura', '2024-05-01');
sistema.marcarAsistencia('Ana', '2024-05-01');
sistema.marcarAsistencia('Juan', '2024-05-02');
sistema.marcarAsistencia('Laura', '2024-05-02');
sistema.marcarAsistencia('Laura', '2024-05-03');
sistema.marcarAsistencia('Ana', '2024-05-03');

// Imprimimos la asistencia de todos los estudiantes en una sola línea de código
sistema.imprimirAsistenciaTodos();