/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var NumeroUno;
    var NumeroDos;
    var suma;

    NumeroUno = document.getElementById("numeroUno").value;
    NumeroUno = parseInt(NumeroUno);
    NumeroDos = document.getElementById("numeroDos").value;
    NumeroDos = parseInt(NumeroDos);

    var suma = (NumeroUno + NumeroDos);
    alert("La suma es: " + suma);
}

function restar() {
    var NumeroUno;
    var NumeroDos;
    var resta;

    NumeroUno = document.getElementById("numeroUno").value;
    NumeroUno = parseInt(NumeroUno);
    NumeroDos = document.getElementById("numeroDos").value;
    NumeroDos = parseInt(NumeroDos);

    var resta = (NumeroUno - NumeroDos);
    alert("La resta es: " + resta);
}

function multiplicar() {
    var NumeroUno;
    var NumeroDos;
    var multiplicar;

    NumeroUno = document.getElementById("numeroUno").value;
    NumeroUno = parseInt(NumeroUno);
    NumeroDos = document.getElementById("numeroDos").value;
    NumeroDos = parseInt(NumeroDos);

    var multiplicar = (NumeroUno * NumeroDos);
    alert("La multiplicacion es: " + multiplicar);
}

function dividir() {
    var NumeroUno;
    var NumeroDos;
    var dividir;

    NumeroUno = document.getElementById("numeroUno").value;
    NumeroUno = parseInt(NumeroUno);
    NumeroDos = document.getElementById("numeroDos").value;
    NumeroDos = parseInt(NumeroDos);

    var dividir = (NumeroUno / NumeroDos);
    alert("La division es: " + dividir);
}

