function mostrar() {
    var edad;
    var estadoCivil;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;  //tomo la edad 

    if (edad >= 18 && estadoCivil == "Soltero") /* == funciona unicamente con la id seleccionada*/ {
        alert("Es soltero y no es menor.")
    }
}

/* git clone (descargar proyecto)
   git status
   git add .
   git commit -m "comentario"
   git push origin master (Subir proyecto)/*