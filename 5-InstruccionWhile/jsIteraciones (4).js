function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9) {

		numero = prompt("Error, ingrese nuevamente el numero");
	}
}//FIN DE LA FUNCIÓN