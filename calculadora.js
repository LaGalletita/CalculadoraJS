function calculadora() {
let x = 0, z = 0;

while (true) {

  switch (prompt("Elige tu opción: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir. \n 5. Salir")) {
    case "1": {
      x = Number(prompt("Escribe el primer sumando"));
      z = Number(prompt("Ahora escribe el segundo sumando"));
      let resultadoSuma = x + z;
      alert("Tú resultado es " + resultadoSuma);
      calculadora();
      break;
    }
    case "2": {
      x = Number(prompt("Escribe el valor del minuendo"));
      z = Number(prompt("Ahora escribe el valor del sustraendo"));
      let resultadoResta = x - z;
      alert("Tú resultado es " + resultadoResta);
      calculadora();
      break;
    }
    case "3": {
      x = Number(prompt("Especifica tu multiplicando"));
      z = Number(prompt("Ahora especifica tu multilpicador"));
      let resultadoMultiplicar = x * z;
      alert("Tú resultado es " + resultadoMultiplicar);
      calculadora();
      break;
    }
    case "4": {
      x = Number(prompt("Especifica tu divisor"));
      z = Number(prompt("Ahora especifica tu dividendo"));
      let resultadoDivision = x / z;
      alert("Tú resultado es " + resultadoDivision);
      calculadora();
      break;
    }

    case "5": {
      break;
    }

    default: {
      alert("No has seleccionado una opción válida.");
      break;
    }
  }
break;
 }
}
