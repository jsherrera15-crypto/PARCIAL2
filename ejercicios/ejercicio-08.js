let num1 = 15;
let num2 = 5;

let suma = num1 + num2; 
let resta = num1 - num2; 
let multiplicacion = num1 * num2; 

let division;
if (num2 !== 0) {
  division = num1 / num2;
} else {
  division = "Error: no se puede dividir por cero";
}

let modulo;
if (num2 !== 0) {
  modulo = num1 % num2;
} else {
  modulo = "Error: no se puede calcular el modulo con cero";
}

let promedio = (num1 + num2) / 2;

let comparacion;
if (num1 > num2) {
  comparacion = `${num1} es mayor que ${num2}`;
} else if (num1 < num2) {
  comparacion = `${num2} es mayor que ${num1}`;
} else {
  comparacion = "Ambos numeros son iguales";
}

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("Division:", division);
console.log("Modulo:", modulo);
console.log("Promedio:", promedio);
console.log("Comparacion:", comparacion);

// primero declaramos las variables numericas, despues ponemos las operaciones basicas, luego 
// hacemos el manejo especial de la división (evitar division por cero), calculamos el promedio, 
// y determinamos cual numero es mayor, menor o si son iguales, y finalmente mostramos los resultados 
