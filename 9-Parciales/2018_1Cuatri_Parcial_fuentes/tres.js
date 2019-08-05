function mostrar() {
    
    var precio = prompt("Ingresar el precio");
    var descuento = prompt("Ingresar el descuento");    
    var suma;

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    suma=(precio - precio * descuento / 100);
    document.getElementById("elPrecioFinal").value = suma; // Muestro el precio final
}
