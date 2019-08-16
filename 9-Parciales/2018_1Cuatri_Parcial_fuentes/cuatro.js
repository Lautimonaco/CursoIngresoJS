function mostrar() {

    var numerouno;
    var numerodos;
    var suma;


    numerouno = parseInt(prompt("Ingrese el primer numero: "));
    while (isNaN(numerouno)) {
        numerouno = parseInt(prompt("Error, reingrese el primer numero: "));
    }

    numerodos = parseInt(prompt("Ingrese el segundo numero: "));
    while (isNaN(numerodos)) {
        numerodos = parseInt(prompt("Error, reingrese el segundo numero: "));
    }


    if (numerouno == numerodos) {          // Si son iguales, los muestro concatenados
        alert(numerouno + numerodos);
    }

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