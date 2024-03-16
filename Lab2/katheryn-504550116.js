//La variable let, solo puede usarse localmente
console.log("Practica de let");

for(let i; i<3; i++){
    let e = i;
    console.log(e); //se muestra la suma de e + i
}

console.log(e); //esto va a dar error porque e, no esta declarada de forma global

//La variable var, puede usarse de forma global

