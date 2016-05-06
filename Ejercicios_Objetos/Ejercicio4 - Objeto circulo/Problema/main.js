
var circulo = {
	radio : null,
	area: function(){return Math.PI*Math.pow(this.radio,2) },
	longitud: function(){return 2*this.radio*Math.PI}
}
circulo.radio= prompt("Ingresar radio:");

alert("El area :"+circulo.area()+"");
alert("La longitud es : "+ circulo.longitud()+"");