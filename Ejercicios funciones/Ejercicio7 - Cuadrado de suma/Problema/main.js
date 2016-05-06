var numero1 = prompt("Ingresar 1er numero:");
var numero2 = prompt("Ingresar 2do numero:");
function cuadrados(numero1,numero2){
	res1 = numero1 * numero1;
	res2 = numero2 * numero2;
	suma = res1 + res2;
	}
	cuadrados(numero1,numero2);
document.write("El cuadrado del primer numero es: "+res1+"");
document.write("<br> El cuadrado del segundo numero es: "+res2+"");
document.write("<br> La suma de los cuadrados es: "+suma+"");