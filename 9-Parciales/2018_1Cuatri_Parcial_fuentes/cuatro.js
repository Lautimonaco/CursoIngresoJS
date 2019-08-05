function mostrar() {

    var numerouno = prompt("Ingrese el primer numero");
    var numerodos = prompt("Ingrese el segundo numero");
    var suma;


    if (numerouno == numerodos) {          // Si son iguales, los muestro concatenados
        alert(numerouno + numerodos);
    }

    numerouno = parseInt(numerouno);  //paso los datos a numeros, para realizar operaciones
    numerodos = parseInt(numerodos);

    if (numerouno > numerodos) {         // si el primero es mayor lo resto
        alert(numerouno - numerodos);

    } else {
        alert(numerouno + numerodos);      // de lo contrario lo sumo
        suma = (numerouno + numerodos);
    }

    if (suma > 10) {
        alert("La suma es " + suma + " y supero el 10");  // si supera los 10 muestro el mensaje
    }
}