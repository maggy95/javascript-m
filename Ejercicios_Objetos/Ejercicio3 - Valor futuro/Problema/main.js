var inversion = {
	valor : null,
	tasa : null,
	periodo : null
}
inversion.valor = prompt("Ingresar el valor:");
inversion.tasa = prompt("Ingresar la tasa:");
inversion.periodo = prompt("Ingresar el periodo:");
 
var resultado = inversion.valor*Math.pow(1+inversion.tasa/100,inversion.periodo);
alert("El valor es: "+inversion.valor+"");
alert("La tasa es: "+inversion.tasa+"");
alert("El periodo es: "+inversion.periodo+"");
alert("El resultado es: "+resultado+"");
