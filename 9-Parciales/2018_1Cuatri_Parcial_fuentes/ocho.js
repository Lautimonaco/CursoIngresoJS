function mostrar() {

    var letra;
    var numero;
    var seguir;
    var cantidadpares = 0;
    var cantidadimpares = 0;
    var cantidadceros = 0;
    var promediopositivos;
    var cantidadpositivos = 0;
    var bandera = 0;
    var numeromaximo = 0;
    var numerominimo = 0;
    var letramaxima = 0;
    var letraminima = 0;
    var acumuladornumero = 0;
    var acumuladorpositivos = 0;
    var sumanegativos = 0;
    var negativos;
    var cantidadnegativos = 0;


    do {
        letra = prompt("Ingrese una letra:");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100:"));
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseInt(prompt("Error, reingrese un numero entre -100 y 100:"));
        }

        seguir = prompt("Desea continuar si/no");

        if(numero % 2 == 0){
            cantidadpares++;
        }else{
            cantidadimpares++;
        }

        acumuladornumero = acumuladornumero + numero;

        if(numero > 0){
            acumuladorpositivos = acumuladorpositivos + numero; //cuento los positivos
            cantidadpositivos++;   //acumulo los positivos
        }
        if(numero < 0){
            cantidadnegativos++;
            negativos = numero;
        }
        
        if(numero == 0){
            cantidadceros++;
        }

        promediopositivos = acumuladorpositivos / cantidadpositivos; //promedio positivos

        sumanegativos = negativos + numero;

        if(numero > numeromaximo || bandera == 0){
            numeromaximo = numero;
            letramaxima = letra;
        }
        if(numero < numerominimo || bandera == 0){
            numerominimo = numero;
            letraminima = letra;
            bandera = 1;
        }
        
    } while (seguir == "si")

    document.write("La cantidad de numeros pares es: " + cantidadpares + "</br>");
    document.write("La cantidad de numeros impares es: " + cantidadimpares + "</br>");
    document.write("La cantidad de ceros es: " + cantidadceros + "</br>");
    document.write("El promedio de todos los numeros positivos es: " + promediopositivos + "</br>");
    document.write("La suma de todos los numeros negativos es: " + sumanegativos + "</br>");
    document.write("El numero maximo es: " + numeromaximo + " Letra maxima: " + letramaxima +"</br>");
    document.write("La numero minimo es: " + numerominimo + " Letra minima: " + letraminima + "</br>");

}








   

   
   
   
   
   
   
   
   
   
   /*
    var letra;
    var numero;
    var seguir;
    var par = 0;
    var impar = 0;
    var acumNumero = 0;
    var ceros = 0;
    var positivos = 0;
    var negativos = 0;
    var promedio = 0;
    var letraMaxima = 0;
    var letraMinima = 0;
    var numeroMaximo = 0;
    var numeroMinimo = 0;
    var flag = 0;

    do {
        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));

        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseInt(prompt("Error, reingrese un numero correcto"));
        }

        seguir = prompt("Desea continuar? si/no")

        acumNumero = acumNumero + numero;

        if (numero % 2 == 0) {
            par++;
            promedio++;
        } else {
            if (numero % 2 == 1) {
                impar++;
            }
        }

        if (numero > 0) {
            positivos++;
        }

        if (numero < 0) {
            negativos++;
        } else {
            ceros++;
        }

        if (numero < numeroMinimo || flag == 0) {
            numeroMinimo = numero;
            letraMinima = letra;
        }
        if (numero > numeroMaximo || flag == 0) {
            numeroMaximo = numero;
            letraMaxima = letra;
            flag = 1;
        }


    } while (seguir == "si")



    document.write(" La cantidad de numeros pares es: " + par + "<br>" + "La cantidad de numeros impares es: " + impar + "<br>");
    document.write("La cantidad de numeros positivos es; " + positivos + "<br>" + "La cantidad de negativos es: " + negativos + "<br>");
    document.write("La cantidad de ceros es: " + ceros + "<br>" + "El promedio de los numeros positivos es: " + promedio + "<br>");
    document.write("Numero Maximo: " + numeroMaximo + "<br>" + "Letra Maxima: " + letraMaxima + "<br>");
    document.write("Numero minimo: " + numeroMinimo + "<br>" + "Letra minima: " + letraMinima + "<br>");

}

----------------------------------------------------------------------




    
    var letra;
var numero;
var seguir;
var contador = 0;
var acumuladorNotas;
var contadorpares = 0;
var contadorimpares = 0;
var contadorceros = 0;
var mayor;
var menor;
var acumuladorpositivos = 0;
var contadorpositivos = 0;
var acumuladornegativos = 0;
var letramayor;
var letramenor;
    var promedio;


do {
    numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));

    while (!(numero >= -100 && numero <= 100)) {                //Valido numero
        numero = prompt("Error, ingrese un numero correcto");
    }

    letra = prompt("Ingrese una letra");
    while (!(isNaN(letra))) {                        //Valido Letra
        letra = prompt("Ingrese una letra correcta");
    }
    seguir = prompt("Quiere ingresar otro numero/letra?"); //Si el usuario quiere

    contador++;

    acumuladorNotas = acumuladorNotas + numero;
    numero = acumuladorNotas;


    if (numero % 2 == 0) {
        contadorpares++; //defino numeros pares

    } else {
        contadorimpares++; //defino numeros impares

        if (numero > 0) {
            acumuladorpositivos = acumuladorpositivos + numero; //cuento los positivos
            contadorpositivos++;
        } else if (numero < 0) {
            acumuladornegativos = acumuladornegativos + numero;
        }
        else {
            contadorceros++;
        }

        if (numero < mayor || flag == 0)
            mayor = numero;
        letramayor = letra;

        if (numero < menor || flag == 0) {
            menor = numero;
            letramenor = letra;
            flag = 1;
        }
    }
} while (seguir == "si");

if (contadorpositivos != 0) {
    promedio = acumuladorpositivos / contadorpositivos;
}

document.write("a La cantidad de numeros pares: " + contadorpares + "<br>");
document.write("a La cantidad de numeros impares: " + contadorimpares + "<br>");
document.write("a La cantidad de ceros: " + contadorceros + "<br>");
document.write("El promedio es: " + promedio + "<br>");
document.write("a La cantidad de numeros negativos es:  " + acumuladornegativos + "<br>");
document.write("El numero mayor es: " + mayor + "La letra mayor es: " + letramayor + "<br>");

} */