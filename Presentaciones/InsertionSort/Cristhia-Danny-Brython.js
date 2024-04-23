//Integrantes:
//Cristhian Altamirano.
//Danny Abarca.
//Brython Chassagne.

class Carta {
    constructor(palo, valor) {
      this.palo = palo;
      this.valor = valor;
    }
  
    // El método toString() se utiliza para obtener una representación en cadena de un objeto.
    // En este caso, este método se encarga de convertir el valor numérico de la carta a su representación en letras ('A', 'J', 'Q', 'K') si corresponde.
    // Utiliza una estructura switch para comparar el valor numérico de la carta y asignar la letra correspondiente.
    toString() {
      let valor;
      switch (this.valor) {
        case 1:
          valor = 'A';
          break;
        case 11:
          valor = 'J';
          break;
        case 12:
          valor = 'Q';
          break;
        case 13:
          valor = 'K';
          break;
        default:
          valor = this.valor.toString();
      }
      return `${valor} de ${this.palo}`;
    }
  }
  
  class Mazo {
    constructor() {
      this.cartas = [];
      this.valores = [];
      this.palos = ['Corazones', 'Diamantes', 'Picas', 'Tréboles'];
    }
  
    // Este método se encarga de crear los valores de las cartas de manera aleatoria.
    // Primero, crea un arreglo 'valores' con las letras de las cartas ('A', '2', '3', ..., 'J', 'Q', 'K').
    // Luego, desordena este arreglo utilizando sort() y una función de comparación que devuelve un valor aleatorio.
    // Después, utiliza map() para convertir los valores a sus equivalentes numéricos ('A' -> 1, 'J' -> 11, 'Q' -> 12, 'K' -> 13).
    // Finalmente, imprime la mano inicial con los valores desordenados utilizando el método imprimirValores().
    crearValores() {
      const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      this.valores = valores.sort(() => Math.random() - 0.5);
      this.valores = this.valores.map(valor => {
        if (valor === 'A') return 1;
        if (valor === 'J') return 11;
        if (valor === 'Q') return 12;
        if (valor === 'K') return 13;
        return parseInt(valor);
      });
      console.log("Mano inicial:", this.imprimirValores(this.valores));
    }
  
    
    // Este método se utiliza para imprimir los valores de las cartas en su representación como letras ('A', 'J', 'Q', 'K').
    // Recibe un arreglo de valores numéricos y utiliza map() para convertirlos a su representación en letras.
    // Utiliza una estructura switch similar a la del método toString() para asignar la letra correspondiente.
    // Finalmente, une todos los valores con una coma y un espacio utilizando join(', ').
    imprimirValores(valores) {
      return valores.map(valor => {
        switch (valor) {
          case 1:
            return 'A';
          case 11:
            return 'J';
          case 12:
            return 'Q';
          case 13:
            return 'K';
          default:
            return valor.toString();
        }
      }).join(', ');
    }
  
    // Este método se encarga de ordenar los valores de las cartas y crear las cartas en el mazo.
    // Primero, llama al método crearValores() para generar los valores de las cartas de manera aleatoria.
    // Luego, ordena estos valores utilizando sort() y una función de comparación que compara los valores numéricos.
    // Imprime la mano ordenada utilizando el método imprimirValores().
    // Finalmente, crea las cartas en el mazo utilizando dos bucles anidados: uno para los palos y otro para los valores.
    // Crea una instancia de la clase Carta con el palo y valor correspondientes y la agrega al arreglo this.cartas.
    juegoDePoker() {
      this.crearValores(); // Crear valores aleatorios
  
      // Función para imprimir el recorrido de ordenamiento
      const imprimirRecorrido = (valores) => {
        console.log('Recorrido de ordenamiento:');
        for (let i = 1; i < valores.length; i++) {
          const valorActual = valores[i];
          let j = i - 1;
          const pasos = [];
          while (j >= 0 && valores[j] > valorActual) {
            pasos.push(`Comparando ${valores[j]} con ${valorActual}`);
            valores[j + 1] = valores[j];
            j--;
          }
          pasos.push(`Insertando ${valorActual} en la posición ${j + 1}`);
          valores[j + 1] = valorActual;
          console.log(`Iteración ${i}: ${pasos.join(' -> ')}`);
        }
      };
  
      imprimirRecorrido(this.valores); // Llamar a la función para imprimir el recorrido
      console.log("Mano ordenada:", this.imprimirValores(this.valores));
  
      // Crear cartas y agregar al mazo
      for (const palo of this.palos) {
        for (const valor of this.valores) {
          this.cartas.push(new Carta(palo, valor));
        }
      }
    }
  
    // Este método se encarga de barajar las cartas en el mazo.
    // Utiliza un algoritmo de barajado conocido como el algoritmo de Fisher-Yates.
    // Recorre el arreglo de cartas desde el final hasta el principio.
    // En cada iteración, genera un índice aleatorio entre 0 y la posición actual.
    // Luego, intercambia la carta en la posición actual con la carta en la posición aleatoria.
    barajar() {
      for (let i = this.cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
      }
    }
  
    // Este método saca (elimina y devuelve) la última carta del mazo.
    // Utiliza el método pop() de los arreglos para eliminar y devolver el último elemento del arreglo this.cartas.
    sacarCarta() {
      return this.cartas.pop();
    }
  }
  
  class Jugador {
    constructor() {
      this.mano = [];
    }
  
      // Este método se encarga de repartir 5 cartas al jugador desde el mazo.
    // Utiliza un bucle while para sacar cartas del mazo y agregarlas a la mano del jugador hasta que la mano tenga 5 cartas.
    // Llama al método agregarCarta() para agregar cada carta a la mano del jugador.
    // Después de repartir las 5 cartas, llama al método ordenarMano() para ordenar la mano del jugador.
    jugar(mazo) {
      while (this.mano.length < 5) {
        const carta = mazo.sacarCarta();
        this.agregarCarta(carta);
      }
      console.log(`Mano del jugador: ${this.mano.map(carta => carta.toString()).join(', ')}`);
      this.ordenarMano(); // Ordenar la mano del jugador
    }
  
    // Este método se encarga de agregar una carta a la mano del jugador, manteniendo la mano ordenada.
    // Recorre la mano del jugador y compara el valor de la nueva carta con los valores de las cartas existentes.
    // Si encuentra una posición donde el valor de la nueva carta es mayor que el valor de la carta en esa posición, inserta la nueva carta en esa posición utilizando splice().
    // Si no se encuentra una posición adecuada, agrega la nueva carta al final de la mano utilizando push().
    agregarCarta(carta) {
      let inserted = false;
      for (let i = 0; i < this.mano.length; i++) {
        if (carta.valor > this.mano[i].valor) {
          this.mano.splice(i, 0, carta);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.mano.push(carta);
      }
    }
  
    // Este método ordena la mano del jugador utilizando el algoritmo de ordenamiento sort().
    // Utiliza una función de comparación que compara los valores numéricos de las cartas.
    ordenarMano() {
      this.mano.sort((a, b) => a.valor - b.valor);
    }
  
    // Este método imprime la mano del jugador en la consola.
    // Utiliza map() para convertir cada carta en su representación en cadena utilizando el método toString() de la clase Carta.
    // Luego, une todas las representaciones de las cartas utilizando join(', ') para obtener una cadena separada por comas y espacios.
    mostrarMano() {
      console.log(`Mano del jugador ordenado: ${this.mano.map(carta => carta.toString()).join(', ')}`);
    }
  }
  
  // Ejecutar el juego
  const mazo = new Mazo();
  mazo.juegoDePoker();
  mazo.barajar();
  const jugador = new Jugador();
  jugador.jugar(mazo);
  jugador.mostrarMano();