let producto = {
  nombre: "mouse inalambricos",
  precio: 120000, 
  stock: 15,

  calcularDescuento: function(porcentaje) {
    let descuento = this.precio - (this.precio * porcentaje / 100);
    return descuento;
  },

  verificarDisponibilidad: function() {
    return this.stock > 0 ? "Disponible" : "Agotado";
  },

  mostrarInfo: function() {
    return `Producto: ${this.nombre}\nPrecio: $${this.precio}\nStock: ${this.stock}\nEstado: ${this.verificarDisponibilidad()}`;
  }
};


console.log(producto.mostrarInfo());
console.log("Precio con 20% de descuento: $" + producto.calcularDescuento(20));
console.log("Disponibilidad:", producto.verificarDisponibilidad()); 

//lo que hacemos primero es crear el producto con sus propiedades establecidas, despues 
//calculamos el descuento restando el porcentaje al precio original, despues lo que hacemos es verificar
//si el producto es disponible si el stock es mayor que 0, está disponible, y por ultimo creamos
//la funcion donde se mostrara la informacion completa del producto
//para finalizar el ejercicio hacemos el ejemplo con un 20 porciento de descuento y revisar si hay disponibles.