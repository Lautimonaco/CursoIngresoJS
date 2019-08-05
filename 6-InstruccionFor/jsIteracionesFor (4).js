function mostrar() {

    var repetir = prompt("Ingrese el número de repeticiones");

    for (i = 0; ; i++) {
        {
            alert(+i);
            if (i == repetir) {
                break;
            }
        }
    }
}