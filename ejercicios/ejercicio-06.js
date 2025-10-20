function tablaMultiplicar(numero) {
  console.log(`\n Tabla de multiplicar del ${numero}:`);
  
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

function esPrimo(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }

  return true;
}

function listarPrimos(limite) {
  console.log(`\n Numeros primos hasta ${limite}:`);
  
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }
}

let numeroTabla = 7;
let limitePrimos = 30;

tablaMultiplicar(numeroTabla);
listarPrimos(limitePrimos);

//empezamos creando la funcion para generar la tabla de multiplicar de un numero especifico,
//en esa funcion usamos un bucle for para generar los resultados, y luego de eso creamos la funcion
//para verificar si un numero es primo, lo principal de esa funcion es que los numeros menores o
// iguales a 1 no son primos, probamos divisores desde 2 hasta la raiz cuadrada del numero, 
//si tiene divisor, no es primo, y por ultimo funcion para listar todos los números primos 
// hasta un limite dado, definimos los valores exactos para ejemplo, y para finalizar llamamos las funciones.