var numero = parseInt(prompt("Ingresar numero"));
var i;
var cadena = ""
function multiplo(numero){
	for(i=0; i<=10; i++){
		multiplo=numero*i;
		cadena+=multiplo+" "
		}
		return cadena;
}
document.write("Sus multiplos son : "+multiplo(numero)+"")