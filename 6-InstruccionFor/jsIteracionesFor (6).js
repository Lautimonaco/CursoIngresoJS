function mostrar() {

    var numero;
    var cantidadpares = 0;

    numero = parseInt(prompt("Ingrese un numero:"));

    for (var i = 0; i = numero; i++) {   // i++ (aumenta de a uno) 

        if (i % 2 == 0) {
            alert(i);
            cantidadpares++;
        }
    }

    alert("Cantidad de numeros pares " + cantidadpares);
}