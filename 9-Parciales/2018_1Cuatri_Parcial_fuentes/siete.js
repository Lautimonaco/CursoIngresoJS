function mostrar() {

    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var promedio;
    var notaBaja;
    var sexoBajo;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Ingrese nota 0-10; "));
        while (!(nota >= 0 && nota <= 10)) {      //Mientras no sea valida la nota, la pido otra vez
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

    promedio = acumuladorNotas / 5;
    alert("El promedio es: " + promedio);   //saco el promedio de las notas y lo muestro por alert

    if (nota < notaBaja || i == 0) {
        notaBaja = nota
        sexoBajo = sexo
    }   

    alert("La nota mas baja es " + notaBaja + "Y el sexo: " + sexo);

}




/*
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

--------------------------


/*contador = 0
while (contador <  5)
{

    contador ++;
}


respuesta: "Si"
while (respuesta == "Si")
{


    respuesta=Prompt
}


edad=prompt
while {


    edad=prompt

*/