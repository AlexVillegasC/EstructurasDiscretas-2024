// Se define el Array de Preguntas
const questions = [
  {
    question: '2 + 3 =?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1
  },
  {
    question: '5 - 2 =?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2
  },
  {
    question: '4 * 2 =?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2
  },
  {
    question: '8 / 2 =?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1
  }
];

// Se define el Índice de la Pregunta Actual
let currentQuestionIndex = 0;

// Se define el Area de Interaccion
const interactionArea = document.getElementById('interactionArea');

// Se define la Funcion para Mostrar las Preguntas
function displayQuestion(question) {
  interactionArea.innerHTML = '';

  // Se crea el Elemento P para la Pregunta
  const questionElement = document.createElement('p');
  questionElement.textContent = question.question;
  interactionArea.appendChild(questionElement);

  // Se crea el Elemento UL para las Opciones
  const optionsList = document.createElement('ul');

  // Se itera sobre cada opción de la pregunta
  question.options.forEach((option, index) => {
    // Se crea un elemento <li> para la opción
    const optionElement = document.createElement('li');
    optionElement.textContent = option;

    // Se agrega un manejador de eventos al elemento <li> para verificar la respuesta seleccionada
    optionElement.addEventListener('click', () => {
      // Si la respuesta seleccionada es correcta, se muestra un mensaje de alerta "Correct!"
      if (index === question.correctAnswer) {
        alert('Correcto!');

        // Se incrementa el Índice de la Pregunta Actual
        currentQuestionIndex++;

        // Se muestra la siguiente pregunta
        if (currentQuestionIndex < questions.length) {
          displayQuestion(questions[currentQuestionIndex]);
        } else {
          alert('No hay mas Preguntas!');
        }
      } 
      // Si la respuesta seleccionada es incorrecta, se muestra un mensaje de alerta "Incorrect!"
      else {
        alert('Incorrecto!');
      }
    });

    // Se agrega el elemento <li> (opción) al elemento <ul> (lista de opciones)
    optionsList.appendChild(optionElement);
  });

  // Se agrega el elemento <ul> (lista de opciones) al área de interacción
  interactionArea.appendChild(optionsList);
}

// Se muestra la primera pregunta de la lista de preguntas
displayQuestion(questions[currentQuestionIndex]);

// Se añade un manejador de eventos al área de interacción que se activa cuando el puntero del mouse se mueve sobre el área
interactionArea.addEventListener('mouseover', () => {
  // Se utiliza el método querySelector para seleccionar el primer elemento <ul> (que contiene las opciones) dentro del área de interacción
  const optionsList = interactionArea.querySelector('ul');

  // Si se encuentra un elemento <ul>, se establece la propiedad style.display a 'block', lo que hace que la lista de opciones sea visible
  if (optionsList) {
    optionsList.style.display = 'block';
  }
});

// Se añade un manejador de eventos al área de interacción que se activa cuando el puntero del mouse sale del área
interactionArea.addEventListener('mouseout', () => {
  // Se utiliza el método querySelector para seleccionar el primer elemento <ul> (que contiene las opciones) dentro del área de interacción
  const optionsList = interactionArea.querySelector('ul');

  // Si se encuentra un elemento <ul>, se establece la propiedad style.display a 'none', lo que oculta la lista de opciones
  if (optionsList) {
    optionsList.style.display = 'none';
  }
});