var masaCorporal = {
	peso : null,
	estatura : null,
	IMC : function(){ return parseFloat(this.peso / Math.pow(this.estatura,2)) }
}
masaCorporal.peso = parseInt(prompt("Introduce tu peso en kg : "));
masaCorporal.estatura = parseFloat(prompt("Introduce tu estatura en mts: "));

alert("Tu indice de masa corporal es: "+masaCorporal.IMC()+"")