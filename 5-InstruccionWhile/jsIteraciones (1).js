function mostrar() {

	var numeros;
	numeros = 0;
	numeros = parseInt(numeros);

	while (numeros < 10) {
		numeros = numeros + 1;
		alert(numeros);   /* funciona con true o 1 */
	}                                              /* Sin break funciona infinito */
}

/* Diferentes While:

Contador = 0

while (contador > 5) {
	contador = contador + 1
}

-Validacion:

var nota;
nota = 10

while (nota > 10) {
	console.log("error");
	nota = prompt("ingrese nombre")  ---Si no colocamos esto, se repite infinitas veces.---
}

 var respuesta = "S"
while (Respuesta == "S") {


	Respuesta = prompt("S para seguir");
}

*/