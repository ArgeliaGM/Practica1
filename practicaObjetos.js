//Crear:
function Producto (nombre, precio) {
    this.nombre = nombre
    this.precio = precio,
    this.mostrarInfo =function() {
        return this.nombre + "cuesta $" + this.precio;
    };
}
//crear tres productos
const Producto1 = new Producto ("labial", 150);
const Producto2 = new Producto ("rimel", 180);
const Producto3 = new Producto ("base", 250);
//después
console.log (Producto1.mostrarInfo());
console.log (Producto2.mostrarInfo());
console.log (Producto3.mostrarInfo());