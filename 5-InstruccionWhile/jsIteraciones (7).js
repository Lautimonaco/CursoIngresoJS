function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var seguir="si";
	var numero;

	do {
		
		numero = prompt("Ingrese un numero");
		seguir = prompt("Quiere ingresar otro numero?");

		numero = parseInt(numero);

		contador = contador + 1;  /* Es igual que:w contador ++, contador =+1 */
		acumulador = acumulador + numero;

	} while(seguir == "si");


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN