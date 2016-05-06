var num=parseInt(prompt("Ingrese el número entero positivo"));
function digitos(num){
	if(num>0){
	return "El número "+num+" tiene "+(num.toString()).length+" dígitos"
	}else{
		return "El número debe ser positivo"
	}
}
alert(digitos(num))