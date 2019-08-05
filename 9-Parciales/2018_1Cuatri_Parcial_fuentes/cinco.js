function mostrar() {

    var sistemaSolar = prompt("Ingrese un planeta");
    var mensaje;

    switch (sistemaSolar) {

        case "mercurio":
        case "venus":
            mensaje = "Aca hace mas calor";
            break;


        case "tierra":
            mensaje = "Aca vivimos";
            break;


        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = "Aca hace mas frio";
            break;


        default:
            mensaje = "No es un planeta";

    }
    alert(mensaje);
}
