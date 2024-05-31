function GestorReservas()
{
    // Creamos un HashMap para rastrear la disponibilidad de las habitaciones
    this.disponibilidadHabitaciones = new Map();

    // Función para inicializar las habitaciones disponibles
    this.inicializarHabitaciones = function(numHabitaciones) {
        for (let i = 1; i <= numHabitaciones; i++)
        {
            this.disponibilidadHabitaciones.set(i, true); // Todas las habitaciones inicialmente están disponibles
        }
    };

    // Función para hacer una reserva de habitación
    this.hacerReserva = function(numHabitacion) {
        // Verificamos si la habitación está disponible
        if (this.disponibilidadHabitaciones.get(numHabitacion))
        {
            // Marcamos la habitación como no disponible
            this.disponibilidadHabitaciones.set(numHabitacion, false);
            console.log(`Reserva de habitación ${ numHabitacion}
            realizada con éxito.`);
        }
        else
        {
            console.log(`La habitación ${ numHabitacion}
            ya está reservada.`);
        }
    };

    // Función para cancelar una reserva de habitación
    this.cancelarReserva = function(numHabitacion) {
        // Verificamos si la habitación está reservada
        if (!this.disponibilidadHabitaciones.get(numHabitacion))
        {
            // Marcamos la habitación como disponible nuevamente
            this.disponibilidadHabitaciones.set(numHabitacion, true);
            console.log(`Reserva de habitación ${ numHabitacion}
            cancelada.`);
        }
        else
        {
            console.log(`La habitación ${ numHabitacion}
            no está reservada.`);
        }
    };
}

// Creamos una instancia del GestorReservas
let gestor = new GestorReservas();

// Inicializamos las habitaciones disponibles (por ejemplo, 10 habitaciones)
gestor.inicializarHabitaciones(10);

// Hacemos algunas reservas
gestor.hacerReserva(3); // Salida: Reserva de habitación 3 realizada con éxito.
gestor.hacerReserva(5); // Salida: Reserva de habitación 5 realizada con éxito.

// Intentamos reservar la misma habitación nuevamente
gestor.hacerReserva(3); // Salida: La habitación 3 ya está reservada.

// Cancelamos una reserva
gestor.cancelarReserva(5); // Salida: Reserva de habitación 5 cancelada.

// Intentamos cancelar una reserva que no existe
gestor.cancelarReserva(7); // Salida: La habitación 7 no está reservada.