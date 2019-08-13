function mostrar() {

    var nota;
    var sexo;
    var promediototal;
    var notabaja;
    var sexobajo;
    var cantidadvarones = 0;
    var acumuladornotas = 0;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Ingrese la nota entre 0 y 10:"));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt("Error, reingrese una nota correcta"));
        }

        sexo = prompt("Ingrese el sexo 'f' o 'm'")
        while (!(sexo == "F" || sexo == "M" || sexo == "f" || sexo == "m")) { //paso a miniscula (tolowercase)
            sexo = prompt("Error, reingrese el sexo 'f' o 'm'")
        }

        acumuladornotas = acumuladornotas + nota;
        promediototal = acumuladornotas / 5;

        if (nota < notabaja || i == 0) {
            notabaja = nota;
            sexobajo = sexo;
        }

        if (nota >= 6 && sexo == "M" || sexo == "m") {
            cantidadvarones++;
        }
    }

    alert("El promedio de las notas es: " + promediototal);
    alert("La nota mas baja es: " + notabaja + " y el sexo es: " + sexobajo);
    alert("La cantidad de varones con nota mayor a 6 es: " + cantidadvarones);

}

/* --------------------------------------------------------------------------------------

var nota;
 var sexo;
 var promediototal;
 var notabaja;
 var cantidadvarones = 0;
 var acumuladornotas = 0;
 var sexobajo;

 for (var i = 0; i < 5; i++) {
     nota = parseInt(prompt("Ingrese una nota del 0 al 10"));
     while (!(nota >= 0 && nota <= 10)) {
         nota = parseInt(prompt("Error, ingrese una nota correcta"));
     }

     sexo = prompt("Ingrese el sexo 'f' o 'm':");
     while (!(sexo == "f" || sexo == "m" || sexo == "M" || sexo == "F")) {
         sexo = prompt("Error, ingrese un sexo correcto");
     }

     acumuladornotas = acumuladornotas + nota;

     promediototal = acumuladornotas / 5;

     if (nota < notabaja || i == 0) {
         notabaja = nota;
         sexobajo = sexo;
     }

     if (nota >= 6 && sexo == "m") {
         cantidadvarones++;
     }
 }

 alert("El promedio de las notas totales es: " + promediototal);
 alert("La nota mas baja es: " + notabaja + " y el sexo de esa persona: " + sexobajo);
 alert("Cantidad de varones que su nota haya sido mayor a 6: " + cantidadvarones);
}
*/
/*
--------------------------------------------------------------------------------------------
var nota;
var sexo;
var acumuladorNotas = 0;
var promedio;
var notaBaja;
var sexoBajo;
var contadorVaronesMayor = 0;
//var contador = 0;  lo pongo cuando no se cuantas veces va a pedir la nota.

for (var i = 0; i < 5; i++) {

    nota = parseInt(prompt("Ingrese nota 0-10; "));
    while (!(nota >= 0 && nota <= 10)) { //Otra forma: (nota < 0 || nota > 10 ||  isNaN(nota))
        nota = parseInt(prompt("Error, reingrese la nota"));
    }

    // ya tengo la nota validada

    sexo = prompt("Ingrese sexo: ");             //Mientras no sea valido el sexo
    while (!(sexo == "m" || sexo == "f" || sexo == "M" || sexo == "F")) { //valido tambien con mayusculas
        sexo = prompt("Error, reingrese el sexo");
    }

}

acumuladorNotas = acumuladorNotas + nota;    // acumula las notas que ingreso el usuario
//acumuladorNotas += numero;

if (nota < notaBaja || i == 0) {
    notaBaja = nota;
    sexoBajo = sexo;
}

if (sexo == "m" && nota >= 6) {    //Cantidad varones que la nota sea mayor
    contadorVaronesMayor++;
}

notaBaja = nota;
sexoBajo = sexo;

promedio = acumuladorNotas / 5;     //alert("El promedio de la nota es: " + promedio / 5);
alert("Promedio: " + promedio);
alert("Nota Baja: " + notaBaja + " Sexo : " + sexoBajo);

alert("Cantidad de varones con notas mayores a 6: " + contadorVaronesMayor);
}
---------------------------------------------------------------------------------------


if (contador = 00) {
    min = nota;
    max nota;

} else {
    if (nota < min) {

        min = nota;
    }
    if (nota > max) {
        max = nota;
    }
}
}

/* while (   ) {

pido el numero
if( contador == 0) {
  min = numero;
  max = numero:

} else
    {
    if( numero < min)
    {
        min = numero;
    }
    if (numero > max)
    {
       max = numero;
    }
}
}
*/