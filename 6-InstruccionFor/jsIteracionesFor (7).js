function mostrar() {

    var numero;
    var cantidaddivisores = 0;

    numero = parseInt(prompt("Ingrese un numero:"));

    for (var i = 0; numero; i++) {
        while (isNaN(numero)) {
            numero = parseInt(prompt("Error, reingrese un numero:"));
        }

        if (numero) {
            alert(numero / 2);
            cantidaddivisores++;
        }


    }

}