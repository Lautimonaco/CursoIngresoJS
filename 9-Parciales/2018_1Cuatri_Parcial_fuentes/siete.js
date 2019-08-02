function mostrar() {
    var nota;
    var sexo;
    contador = 0;
    var contadorNota = 0;
    var acumulador = 0;


    while (contador < 5) {
        contador++;

        nota = prompt("Ingrese la nota");
        if (nota < 0 && nota > 10) {

            prompt("Ingrese una nota entre 1 y 10");
        }

        sexo = prompt("Ingrese el sexo");
        if (sexo != "f" && sexo != "m") {

            prompt("Ingrese un sexo correcto");
        }
    }

    alert("El promedio de la nota es: " + nota / 100);
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
}

*/

