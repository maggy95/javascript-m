var datos=[]
for(var i=0;i<3;i++){
   datos.push(parseInt(prompt("Ingrese el número "+(i+1))))
}
function ordenar(datos){
	return datos.sort(function(a, b){return a-b})
}
alert("El resultado es: "+ordenar(datos))