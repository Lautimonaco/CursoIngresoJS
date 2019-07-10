/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var Numerouno;
    var Numerodos;
    var suma;

    Numerouno = document.getElementById("numeroUno").value;
    Numerouno = parseInt(Numerouno); /*Se convierte en numero*/
    Numerodos = document.getElementById("numeroDos").value;
    Numerodos = parseInt(Numerodos); /*Se convierte en numero*/

    var suma =(Numerouno + Numerodos); /*Operacion*/

    alert("La suma es: " + suma);
}

