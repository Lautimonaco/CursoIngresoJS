function mostrar() {
   var edad;

   edad = document.getElementById("edad").value;  //tomo la edad 

   if (edad >= 13)
      if (edad <= 17) {
         alert("Es adolescente");
      }
}