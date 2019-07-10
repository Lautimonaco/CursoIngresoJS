/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var NumeroDividendo;
    var NumeroDivisor;
    var resto;

    NumeroDividendo = document.getElementById("numeroDividendo").value;
    NumeroDividendo = parseInt(NumeroDividendo);
    NumeroDivisor = document.getElementById("numeroDivisor").value;
    NumeroDivisor = parseInt(NumeroDivisor);

    var resto = (NumeroDividendo % NumeroDivisor);
    alert("El resto es: " + resto);
}
