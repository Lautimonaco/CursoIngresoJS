function mostrar() {

	var numero;
	var numeromaximo = 0;
	var numerominimo = 0;
	var seguir;
	var bandera = 0;

	do {

		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Error, reingrese un numero: "));
		}

		if (numeromaximo > numero || bandera == 0) {
			numeromaximo = numero;
		}

		if (numerominimo < numero || bandera == 0) {
			numerominimo = numero;
			bandera = 1;
		}

		seguir = prompt("Quiere continuar? si/no");
	} while (seguir == "si");

	document.getElementById('minimo').value = numeromaximo;
	document.getElementById('maximo').value = numerominimo;
}