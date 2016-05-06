var angulo1 =parseInt(prompt("ingresar numero:"));
var angulo2 =parseInt(prompt("ingresar numero:"));
var angulo3 =parseInt(prompt("ingresar numero:"));
if( angulo1+angulo2+angulo3 === 180){
	if(angulo1===60 && angulo2===60 && angulo3 === 60){ 
	alert("Este rectangulo es equilatero")
		}
	if (angulo1 === angulo2 && angulo1 !== angulo3 && angulo2 !== angulo3) {
		alert("Este triangulo es isoceles")
	};
	if (angulo1 !== angulo2 && angulo1 !== angulo3 && angulo2 !== angulo3 && angulo2 !== angulo1 && angulo3 !== angulo1 && angulo3 !==90 && angulo2 !==90 && angulo1==90 ) {
		alert("Este triangulo es escaleno")
	};
	if (angulo1 + angulo2 ===90 && angulo3 === 90) {
		alert("Este triangulo es rectangulo")
	};
}else{
	alert("No es triangulo ingresar nuevamente");
}