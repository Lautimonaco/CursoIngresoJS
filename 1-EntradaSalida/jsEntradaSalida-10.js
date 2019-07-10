/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var Resultado;

    importe = document.getElementById("importe").value;
    importe = parseInt(importe);

    Resultado = importe - (importe * 0.25); /* operacion de - 25% */

    document.getElementById("resultado").value = Resultado;
}
