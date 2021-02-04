let cont;
let max;
let nivel;
let debug = false;
alert("El juego consiste en adivinar un numero entre 1 y 100 en 10 intentos. Para esto se va indicando en caso de fallar si el numero introducido es menor o mayor al numero generado");

//nivel = prompt("Eliga una de las opciones dichas... 1. Facil , 2. Medio, 3. Dificil");
while(nivel < 1 || nivel > 3 || nivel == null){
	nivel = prompt("El juego tiene tres niveles de dificultad: 1. Facil (15 vida y limite de numeros del 0 al 50),  2. Medio (10 vidas y limite de numeros del 0 al 100), 3. Dificil (5 vidas y limite de numeros del 0 al 200), eliga uno:");
	if(nivel == 1){
		cont = 15;
		max = 51;
	}else if(nivel == 2){
		cont = 10;
		max = 101;
	}else if(nivel == 3){
		cont = 5;
		max = 200;
	}
}
let number = Math.floor(Math.random() * max);

if(debug){
	alert(number);
}
let numero = prompt("Introduzca su numero entre 1 y " + max + ":");
while(cont > 0 && numero != null){

	if(numero == number){
		alert("Acertaste al intento " + cont + " :)");
		break;
	}



	cont--;
 
	if(cont == 1){
		alert("Ultimo intento: ");
	}

	if(cont == 0)
	{ 
		alert("Lo lamento, has perdido, el valor era: " + number);
		break;
	}

	if(numero > number){
		numero = prompt("El numero: " + numero + " es mayor al creado  al azar, te quedan " + cont  + " vidas");
	}else if(numero < number){		
		numero = prompt("El numero " + numero + " es menor al creado al azar, te quedan " + cont + " vidas");
	}	
}


alert("Hasta Luego :)");
