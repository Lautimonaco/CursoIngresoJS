function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var seguir;
	var numero;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) {        // Si el usuario no ingresa un numero, muestra esto
			alert("No es un numero.")
			numero = parseInt(prompt("Ingrese un numero: "));
		}

		if (numero > 0) {
			positivo = positivo + numero;
		} else {
			negativo = negativo * numero;
		}

		contador++;
		seguir = prompt("Quiere ingresar otro numero?");

	} while (seguir == "si");

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}