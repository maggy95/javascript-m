var paso = prompt("Ingresar numero");
var nombre = ["juan","carlos"];
var i;
for(i = 1; i<= paso; i ++ ){
	nombre.push(prompt("Que nombres quieres ingresar"));

}
document.write(""+nombre+"");