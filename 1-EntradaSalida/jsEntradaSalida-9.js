/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var Resultado;

    importe = document.getElementById("sueldo").value;
    importe  = parseInt(importe);

    Resultado = (importe * 0.1 + importe); /* operacion de 10% */

    document.getElementById("resultado").value = Resultado; /*Resultado en recuadro "resultado'*/
}
