function calcularArea(figura, base, altura, radio) {
  let area = 0; 

  if (figura === "rectangulo") {
    area = base * altura;

  } else if (figura === "triangulo") {
    area = (base * altura) / 2;

  } else if (figura === "circulo") {
    let pi = 3.14;
    area = pi * (radio * radio); 

  } else {
    console.log("Figura no válida."); 
    return; 
  }

  return area; 
}

console.log("area del rectangulo:", calcularArea("rectangulo", 10, 5));
console.log("area del triangulo:", calcularArea("triangulo", 8, 4));
console.log("area del circulo:", calcularArea("circulo", 0, 0, 6));


//lo que hacemos en este segundo ejercicio lo que hacemos primero es crear una funcion llamada calcularArea
// y alli incluimos lo que vendria siendo mas importante figura, base, altura, radio, y creamos la variable 
//principal donde se va a guardar el resultado, y se usa condicionales para determinar qué formula aplicar segun la figura
// que sea Devuelve el area calculada usando return y se usan ejemplos al final para probar cada caso.