/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var Numero1;
    var Numero2;

    Numero1 = document.getElementById("numeroUno").value;
    Numero2 = document.getElementById("numeroDos").value;

    Numero1 = parseInt(numeroUno); /*Se convierte en numero*/
    Numero2 = parseInt(numeroDos);

    alert("La suma es " Numero1 + Numero2);
}

