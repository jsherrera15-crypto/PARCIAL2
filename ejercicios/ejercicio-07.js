const estudiantes = [
  { nombre: "Ana", promedio: 4.5 },
  { nombre: "Luis", promedio: 2.9 },
  { nombre: "Marta", promedio: 3.8 },
  { nombre: "Carlos", promedio: 1.7 }
];

function agregarEstado(estudiantesArr, umbral = 3.0) {
  return estudiantesArr.map(function(est) {
    const estado = est.promedio >= umbral ? "Aprobado" : "Reprobado";

    return {
      nombre: est.nombre,
      promedio: est.promedio,
      estado: estado
    };
  });
}

function promedioGeneral(estudiantesArr) {
  if (estudiantesArr.length === 0) return 0;

  const suma = estudiantesArr.reduce(function(acum, est) {
    return acum + est.promedio;
  }, 0);

  return suma / estudiantesArr.length;
}

function filtrarPorEstado(estudiantesArr, estadoBuscado = "Aprobado") {
  return estudiantesArr.filter(function(est) {
    return est.estado === estadoBuscado;
  });
}

const listaConEstado = agregarEstado(estudiantes, 3.0);
console.log("Estudiantes con estado:");
console.log(listaConEstado);

const promedioAll = promedioGeneral(estudiantes);
console.log("Promedio general:", promedioAll);

const aprobados = filtrarPorEstado(listaConEstado, "Aprobado");
console.log("Solo aprobados:");
console.log(aprobados);

//iniciamos creando un arrelgo con informacion de varios estudiantes que cramos manuelamente, con promedios repartidos,
//usamos map() para crear un nuevo arreglo con una propiedad adicional "estado", seguido a esto
// definimos el condicional para determinar si aprueba o reprueba, sacamos el promedio general usando reduce() y ya finalizamos retornando la
//informacion anterior que ya teniamos mas el estado, 