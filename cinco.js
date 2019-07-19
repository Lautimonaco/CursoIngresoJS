function mostrar() {

    var sistemaSolar;
    var mensaje;


    sistemaSolar = prompt("Ingrese un planeta: ");
    alert(sistemaSolar);

    switch(sistemaSolar) {
        case "mercurio":
        case "venus":
            mensaje =("acá hace mas calor");
            break;

        case "tierra":
            mensaje =("acá vivimos");
            break;

        case "jupiter":
        case "saturno":
        case "pluton":
        case "urano":
        case "neptuno":
        case "marte":
            mensaje =("acá hace más frio");
            break;

        default;
            mensaje =("No es un planeta valido");

            alert(mensaje);
    }

}
