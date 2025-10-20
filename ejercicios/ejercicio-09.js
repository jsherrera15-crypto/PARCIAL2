let ventas = [
  { producto: "Laptop", categoria: "Tecnología", cantidad: 8 },
  { producto: "Mouse", categoria: "Tecnología", cantidad: 15 },
  { producto: "Silla", categoria: "Muebles", cantidad: 5 },
  { producto: "Escritorio", categoria: "Muebles", cantidad: 7 },
  { producto: "Camisa", categoria: "Ropa", cantidad: 12 },
  { producto: "Pantalón", categoria: "Ropa", cantidad: 9 }
];

function calcularTotalesPorCategoria(ventas) {
  let totales = {}; 

  for (let venta of ventas) {
    if (totales[venta.categoria]) {
      totales[venta.categoria] += venta.cantidad;
    } else {
      totales[venta.categoria] = venta.cantidad; 
    }
  }

  return totales;
}

function productoMasVendido(ventas) {
  let masVendido = ventas[0]; 

  for (let i = 1; i < ventas.length; i++) {
    if (ventas[i].cantidad > masVendido.cantidad) {
      masVendido = ventas[i]; 
    }
  }

  return masVendido;
}


console.log("Totales por categoria:", calcularTotalesPorCategoria(ventas));

let topProducto = productoMasVendido(ventas);
console.log("Producto mas vendido:", topProducto.producto, "con", topProducto.cantidad, "ventas");

//empezamos creando un arreglo de objetos que representan ventas de productos aleatorios, despues definimos
//la funcion para calcular totales por categoria, se crea el objeto donde guardaremos las sumas por categoria, 
//Si ya existe, sumamos, si no, la creamos, despues creamos otra funcion para encontrar el producto mas vendido, 
//tomamos el primero como punto de partida, si encontramos uno con mas cantidad, lo actualizamos, y se pone de primero, 
//y finalmente se muestran resultados en consola.