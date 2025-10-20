let numeros = [10, 25, 3, 42, 17, 8, 30];

function encontrarMayor(may) {
  let mayor = may[0]; 
  for (let i = 1; i < may.length; i++) {
    if (may[i] > mayor) {
      mayor = may[i]; 
    }
  }
  return mayor; 
}

//Lo primero que hacemos es crear un arreglo con numeros aleatorios para encontrar el numero mayor de acuerdo
//a la funcion que estamos empleando, tomamos el primer numero como punto de partida, y empezamos a hacer pruebas
//si encuentro uno mas grande actualizo la lista, y finalmente se retorn el mayor


function encontrarMenor(men) {
  let menor = men[0]; 
  for (let i = 1; i < men.length; i++) {
    if (men[i] < menor) {
      menor = men[i]; 
    }
  }
  return menor;
}

//aca hacemos practicamente lo mismo pero ya cambiamos a encontrar el numero menor de todos,
//pero basicamente sigue la misma estructura


function calcularPromedio(pro) {
  let suma = 0;
  for (let i = 0; i < pro.length; i++) {
    suma = suma + pro[i];
  }
  return suma / pro.length;
}

//aca lo que hacemos es crear la funcion primero y sumar todos los valores para al final dividirlo entre
//la cantidad total y obtener el promedio


function filtrarPares(par) {
  let pares = [];
  for (let i = 0; i < par.length; i++) {
    if (par[i] % 2 === 0) {
      pares.push(par[i]);
    }
  }
  return pares;
}
//aca usamos una funcion para filtrar los pares, entonces lo que hacemos es coger numero por numero, dividirlo
//entre dos y que el residuo tenga que dar 0 exacto, si es asi lo agregamos al nuevo arreglo de los pares.

function ordenarAscendente(arr) {
  return arr.slice().sort(function(a, b) {
    return a - b;
  });
}
//en esta funcion usamos .sort para ordenar de menor a mayor automaticamente.


console.log("Array original:", numeros);
console.log("Numero mayor:", encontrarMayor(numeros));
console.log("Numero menor:", encontrarMenor(numeros));
console.log("Promedio:", calcularPromedio(numeros));
console.log("Numeros pares:", filtrarPares(numeros));
console.log("Array ordenado de menor a mayor:", ordenarAscendente(numeros));