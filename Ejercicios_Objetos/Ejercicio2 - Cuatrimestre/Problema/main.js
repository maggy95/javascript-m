var mes = [{primerCuatrimestre:"enero"}]
		  // {febrero:"primer cuatrimestre"},
		  // {marzo:"primer cuatrimestre"},
		  // {abril:"primer cuatrimestre"},
		  // {mayo:"primer cuatrimestre"},
		  // {junio:"primer cuatrimestre"},
		  // {julio:"primer cuatrimestre"},
		  // {agosto:"primer cuatrimestre"},
		  // {setiembre:"primer cuatrimestre"},
		  // {octubre:"primer cuatrimestre"},
		  // {noviembre:"primer cuatrimestre"},
		  // {diciembre:"primer cuatrimestre"}c


var mesactual = prompt("Ingresar el mes actual:")

if (mes[0].primerCuatrimestre==mesactual) {
	alert("el mes actual es"+mesactual)
};


// var circulo = {
// 	radio : null,
// 	area: function(){return Math.PI*Math.pow(this.radio,2) },
// 	longitud: function(){return 2*this.radio*Math.PI}
// }
// circulo.radio= prompt("Ingresar radio:");

// alert("El area :"+circulo.area()+"");
// alert("La longitud es : "+ circulo.longitud()+"");

// var mes = prompt("Ingresar el mes: ");
// switch(mes){
// case 'enero':
// case 'febrero': 
// case 'marzo': 
// case 'abril':
// 	alert("Nos encontramos en el primer cuatrimestre del año");
// break;
// case 'mayo' :
// case 'junio' :
// case 'julio' :
// case 'agosto':
// 	alert("Nos encontramos en el 2do cuatrimestre del año");
// break;
// case 'setiembre' :
// case 'octubre' :
// case 'noviembre': 
// case 'diciembre':
// 	alert("Nos encontramos en el ultimo cuatrimestre del año");
// break;
// default:
// 	alert("Ingresa nuevamente");
// }

