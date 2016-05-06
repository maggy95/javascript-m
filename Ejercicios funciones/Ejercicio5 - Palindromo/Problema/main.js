var texto=prompt("Ingrese el texto:"); 
texto=texto.replace().toUpperCase();
var dato=palindromo(texto); 
		if(dato==true){ 
		alert("Si es palindromo"); 
		} else{
 		alert("No es palindromo"); 
		}
function palindromo(texto){ 
	if(texto.length==0 || texto.length ==1) 
		return true; 
	else { 
		var respuesta=texto.substring(1,texto.length-1); 
		return texto[0]==texto[texto.length-1] && palindromo(respuesta);      
	} 
}  