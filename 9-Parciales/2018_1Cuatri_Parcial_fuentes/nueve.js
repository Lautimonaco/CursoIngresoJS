function mostrar() {

    var marca;
    var peso;
    var temperatura;
    var acumuladortemperatura = 0;
    var temperaturanegativa = 0;
    var promediototal = 0;
    var pesomax = 0;
    var pesomin = 0;
    var seguir;
    var par = 0;
    var flag = 0;


    do {
        marca = prompt("Ingresar la marca");
        peso = parseInt(prompt("Ingrese el peso del producto entre -100 y 100"));

        if (isNaN(peso) || peso < 1 || peso > 100) {
            peso = prompt("Ingrese un peso correcto: ");
        }

        temperatura = parseInt(prompt("Ingrese la temperatura entre -30 y 30: "));

        if (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingrese una temperatura correcta: "));
        }

        seguir = prompt("Quiere continuar ingresando datos? ");

        acumuladortemperatura = acumuladortemperatura + temperatura;

        if (temperatura % 2 == 0) {  //Cantidad temperaturas pares
            par++;
        }

        if (peso > pesomax || flag == 0) {  //La marca del producto mas pesado
            pesomax = peso;
            marca++;
        }

        if (peso < pesomin || flag == 0) { 
            pesomin = peso;                     //peso minimo
            flag = 1;
        }

        if (temperatura < 0) {            //productos menos de 0 grados
            temperaturanegativa++;
        }

        promediototal = peso / temperatura;  //promedio de los productos

    } while(seguir == "si");

    document.write("Las temperaturas pares son: " + par + "<br>");
    document.write("La marca del producto mas pesado es: " + marca + "<br>");
    document.write("Productos se conservan menos de 0: " + temperaturanegativa + "<br>");
    document.write("El promedio de los pesos es: " + promediototal + "<br>");
    document.write("El peso maximo es: " + pesomax + "<br>" +  "Y el peso minimo es: " + pesomin + "<br>");

}
