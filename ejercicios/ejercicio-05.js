
function evaluarCalificacion(puntuacion) {

  let nota = Number(puntuacion);

  if (!nota && nota !== 0) {
    return "Error: entrada no valida, debe ingresar un numero.";
  }
  if (nota < 0 || nota > 100) {
    return "Error: la puntuación debe estar entre 0 y 100.";
  }

  let letra;

  if (nota >= 90) {
    letra = "A";
  } else if (nota >= 80) {
    letra = "B";
  } else if (nota >= 70) {
    letra = "C";
  } else if (nota >= 60) {
    letra = "D";
  } else {
    letra = "F";
  }

  let estado = nota >= 60 ? "Aprobado" : "Reprobado";

  return `Puntuacion: ${nota} -> Letra: ${letra} -> Estado: ${estado}`;
}

let entrada = 80;
console.log(evaluarCalificacion(entrada));

//primero creamos la funcion, y verificamos que la puntuacion si este dentro del rango que se esta pidiendo
//evitando que pongan valores incorrectos o que hayan fallos, luego creamos la varibale donde se guardara
//la letra, y ponemos condicinales para asignar la letra a un rango de valores, y ya verificamos si aprobo o 
//reprobo con el operador ternario, y retornamos el mensaje final.