let nombre = "Sebastian Herrera";
let edad = 19;
let promedio = 4.6;
let semestre = 3;

console.log("nombre del estudiante:", nombre);
console.log("edad:", edad);
console.log("semestre actual:", semestre);
console.log("promedio:", promedio);

if (promedio >= 4.5) {
  console.log("Sebastian tiene un excelente desempeño academico");
} else if (promedio >= 3.5) {
  console.log("Sebastian tiene un buen rendimiento, puedes mejorar aun más");
} else if (promedio >= 3.0) {
  console.log("Sebastian tiene un rendimiento aceptable, pero necesitas reforzar algunos temas");
} else {
  console.log("Sebastian tiene un rendimiento bajo, se recomienda apoyo academico");
}

//en este ejercicio lo que hacemos para iniciar es declarar las variables con la informacion 
//del estudiante, ponemos una informacion estandar, despues mostramos al usuario los datos del estudiante
// y finalmente lo que hacemos es evaluar el estado academico del estudiante, en este caso
// pusimos un promedio establecido y con el calculamos y damos la salida dependiendo de eso.