function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;
    
    switch(mes) {
        case "Febrero":
            alert("Tiene 28 dias.");
            break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tiene 31 dias.");
            break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 dias.");
            break;
    }
}//FIN DE LA FUNCIÓN