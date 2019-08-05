function mostrar() {

    var hora = document.getElementById("laHora").value; //Se ingresa una hora
    var mensaje;

    switch (hora) {

        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mensaje = "Es de mañana";
            break;

        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            mensaje = "Es de tarde";
            break;

        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            mensaje = "Es de noche";

            if (hora >= 20 && hora <= 24) {
                mensaje = "A dormir";    //Si es de noche y la hora es menor a 24
            }
            break;
            
        default:
            mensaje = "La hora no es valida";  //Informar si la hora no es valida
            break;
    }

    alert(mensaje);  
}


/* funcion contador:     //el usuario elige si continuar
  var seguir;
  var numero;
  var mayor;
  var menor:
  
  do {
      numero = parseint(prompt("Ingrese un numero"));

  if (contador == 0) {
      mayor = numero;          //Asigno mayor y menor
      menor = numero;
  }

  if (numero > mayor) {
      mayor = numero;          //Reemplazo si el numero es mayor.
  }

  if (numero < menor) {         
      menor = numero;          //Reemplazo si el numero es menor.
  }
}