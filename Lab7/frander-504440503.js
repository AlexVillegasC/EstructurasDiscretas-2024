function RestaurantReservationManager() {
    // Creamos un Map para rastrear la disponibilidad de mesas
    this.availableTables = new Map();

    // Función para inicializar las mesas disponibles
    this.initializeTables = function(numTables) {
        for (let i = 1; i <= numTables; i++) {
            this.availableTables.set(i, true); // Todas las mesas inicialmente están disponibles
        }
    };


    this.reserveTable = function(tableNumber) {

        if (this.availableTables.get(tableNumber)) {

            this.availableTables.set(tableNumber, false);
            console.log(`Reserva de mesa ${tableNumber} realizada con éxito.`);
        } else {
            console.log(`La mesa ${tableNumber} ya está reservada.`);
        }
    };

    // Función para cancelar una reserva de mesa
    this.cancelReservation = function(tableNumber) {

        if (!this.availableTables.get(tableNumber)) {

            this.availableTables.set(tableNumber, true);
            console.log(`Reserva de mesa ${tableNumber} cancelada.`);
        } else {
            console.log(`La mesa ${tableNumber} no está reservada.`);
        }
    };
}


let restaurantManager = new RestaurantReservationManager();


restaurantManager.initializeTables(20);


restaurantManager.reserveTable(3); //  Reserva de mesa 3 realizada con éxito.
restaurantManager.reserveTable(5); //  Reserva de mesa 5 realizada con éxito.


restaurantManager.reserveTable(3); // La mesa 3 ya está reservada.


restaurantManager.cancelReservation(5); // Reserva de mesa 5 cancelada.


restaurantManager.cancelReservation(7); // Salida: La mesa 7 no está reservada.
