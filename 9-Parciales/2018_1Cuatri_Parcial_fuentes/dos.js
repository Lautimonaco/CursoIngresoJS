function mostrar() {

    var nombre;
    var localidad;
// se realiza para guardar datos en recuadros ya definidos
    nombre = document.getElementById("elNombre").value; 
    localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);

}
