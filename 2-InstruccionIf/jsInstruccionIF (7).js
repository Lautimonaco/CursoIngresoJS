function mostrar() {
    var edad;
    var estadoCivil;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;  //tomo la edad 

    if (edad < 18 && estadoCivil != "Soltero") /* operador logico && (y) */ {
        alert("Es muy pequeño para NO ser soltero.")
    }
}