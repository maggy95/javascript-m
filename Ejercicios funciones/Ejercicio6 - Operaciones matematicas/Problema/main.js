 function operar(operacion,n1,n2){
    switch (operacion) {
    case "suma":
    	   return n1+n2
           break
    case "resta":
    	return n1-n2
           break
    case "multiplicacion":
    	   return n1*n2
           break
    case "division":
    	   return n1/n2
           break
   	default:
     		return "Operacion no definida"
     } 
  } var n1 = parseInt(prompt("Ingresar 1er numero"));
 var n2 = parseInt(prompt("Ingresar 2do numero"));
 var operacion=prompt("Ingresar operacion (suma, resta, multiplicacion, division)");
  alert("La operacion es: "+operacion+"");
  alert("El resultado es :"+operar(operacion,n1,n2)+"");
 