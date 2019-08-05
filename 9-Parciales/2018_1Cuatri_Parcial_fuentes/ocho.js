function mostrar() {

    var letra;
    var numero;
    var seguir;
    var contador = 0;
    var acumuladorNotas;
    var numerospares;
    var numerosimpares;


    do {
        numero = parseInt(prompt("Ingrese un numero"));

        while (!(numero >= -100 && numero <= 100)) {
            numero = prompt("Error, ingrese un numero correcto");
        }

        letra = prompt("Ingrese una letra");
        while (!(isNaN(letra))) {
            letra = prompt("Ingrese una letra correcta");
        }
        seguir = prompt("Quiere ingresar otro numero/letra?");

        contador++;

        acumuladorNotas = acumuladorNotas + numero;

    } while (seguir == "si");

    if (numero / 2 == 1) {
        document.write(numeros);
        
    } else {
        document.write(NumerosImparets)
    }


 //   document.write(numero + letra);

     

}
