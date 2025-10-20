class Libro {
  constructor(titulo, autor, categoria, disponible = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.disponible = disponible;
  }
}

class Usuario {
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }
}

class Prestamo {
  constructor(usuario, libro) {
    if (!libro.disponible) {
      throw new Error(` El libro "${libro.titulo}" no esta disponible.`);
    }
    this.usuario = usuario;
    this.libro = libro;
    this.fecha = new Date();
    libro.disponible = false;
  }
}

let libros = [
  new Libro("Cien años de soledad", "Gabriel García Márquez", "Novela"),
  new Libro("El Principito", "Antoine de Saint-Exupéry", "Infantil"),
  new Libro("Clean Code", "Robert C. Martin", "Programación"),
  new Libro("Don Quijote", "Miguel de Cervantes", "Clásico")
];

let usuarios = [
  new Usuario("Ana", 1),
  new Usuario("Luis", 2)
];

let prestamos = []; 


function buscarLibros(criterio, valor) {
  if (!["titulo", "autor", "categoria"].includes(criterio)) {
    console.log(" Criterio invalido. Usa: titulo, autor o categoria.");
    return [];
  }

  let resultados = libros.filter(libro =>
    libro[criterio].toLowerCase().includes(valor.toLowerCase())
  );

  return resultados;
}

function realizarPrestamo(usuarioId, tituloLibro) {
  let usuario = usuarios.find(u => u.id === usuarioId);
  let libro = libros.find(l => l.titulo.toLowerCase() === tituloLibro.toLowerCase());

  if (!usuario) {
    console.log(" Usuario no encontrado.");
    return;
  }
  if (!libro) {
    console.log(" Libro no encontrado.");
    return;
  }

  try {
    let nuevoPrestamo = new Prestamo(usuario, libro);
    prestamos.push(nuevoPrestamo);
    console.log(` Prestamo realizado: "${libro.titulo}" para ${usuario.nombre}.`);
  } catch (error) {
    console.log(error.message);
  }
}

function generarReportePrestamos() {
  if (prestamos.length === 0) {
    console.log(" No hay prestamos registrados.");
    return;
  }

  let reporte = prestamos.map(p => {
    return `${p.usuario.nombre} tiene "${p.libro.titulo}" (prestado el ${p.fecha.toLocaleDateString()})`;
  });

  console.log(" Reporte de préstamos:");
  reporte.forEach(linea => console.log(" - " + linea));
}

console.log(" Búsqueda de libros por categoría 'Programación':");
console.log(buscarLibros("categoria", "Programación"));

realizarPrestamo(1, "El Principito"); 
realizarPrestamo(2, "El Principito");

generarReportePrestamos();

//En este ultimo ejercicio creamos un sistema basico para gestionar una biblioteca usando clases
// y funciones, definimos las clases Libro, Usuario y Préstamo para representar la información 
// principal, luego hicimos funciones para buscar libros por titulo, autor o categoria, usando 
// metodos como filter(), y también para registrar prestamos verificando que el libro estuviera 
// disponible, al final, generamos un pequeño reporte con los datos de los préstamos utilizando 
// programacion funcional.