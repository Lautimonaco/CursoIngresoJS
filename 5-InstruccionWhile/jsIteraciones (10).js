function mostrar() {

	var numero;
	var cantidadpositivos = 0;
	var cantidadnegativos = 0;
	var cantidadceros = 0;
	var cantidadpares = 0;
	var promediopositivos = 0;
	var promedionegativos = 0;
	var diferencia;
	var seguir;
	var acumuladorpositivos = 0;
	var acumuladornegativos = 0;


	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error, reingrese un numero: "));
		}


		if (numero > 0) {
			cantidadpositivos++;
			acumuladorpositivos = acumuladorpositivos + numero;
			promediopositivos = acumuladorpositivos / cantidadpositivos;
		}

		if (numero < 0) {
			cantidadnegativos++;
			acumuladornegativos = acumuladornegativos + numero;
			promedionegativos = acumuladornegativos / cantidadnegativos;
		} else {
			cantidadceros++;
		}

		if (numero % 2 == 0) {
			cantidadpares++;
		}

		diferencia = acumuladorpositivos + acumuladornegativos; 

		seguir = prompt("Quiere continuar ingresando numeros:");

	} while (seguir == "si")

	document.write("La suma de los negativos es: " + acumuladornegativos + "</br>");
	document.write("La suma de los positivos es: " + acumuladorpositivos + "</br>");
	document.write("Cantidad de positivos: " + cantidadpositivos + "</br>");
	document.write("Cantidad de negativos: " + cantidadnegativos + "</br>");
	document.write("Cantidad de ceros: " + cantidadceros + "</br>");
	document.write("cantidad de numeros pares: " + cantidadpares + "</br>");
	document.write("Promedio de positivos: " + promediopositivos + "</br>");
	document.write("Promedio de negativos: " + promedionegativos + "</br>");
	document.write("Diferencia positivos y negativos: " + diferencia + "</br>");
}