function mayusminus(texto){
	var texto=prompt("Ingrese el texto:");
	if(texto==texto.toUpperCase())
		alert("El texto "+texto+" esta formado por mayusculas");
	else if(texto==texto.toLowerCase())
		alert("El texto "+texto+" esta formado por minúsculas");
	else 
		alert("El texto "+texto+" esta formado por mayúsculas y minúsculas");
}

mayusminus();