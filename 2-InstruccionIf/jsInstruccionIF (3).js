function mostrar() {
    var edad;

    edad = document.getElementById("edad").value;  //tomo la edad 

    if (edad >= 18) {
        alert("Mayor de edad");
    }

    if (edad < 18) {
        alert("Menor de edad");
    }
}//FIN DE LA FUNCIÓN