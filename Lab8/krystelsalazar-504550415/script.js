function showName() {
    const nameInput = document.getElementById("nameInput");
    const nameOutput = document.getElementById("nameOutput");
    const name = nameInput.value.trim();
  
    if (name !== "") {
      console.log("Nombre ingresado:", name);
      nameOutput.textContent = `Hola, ${name}!`;
    } else {
      nameOutput.textContent = "Por favor, ingrese su nombre.";
    }
  }