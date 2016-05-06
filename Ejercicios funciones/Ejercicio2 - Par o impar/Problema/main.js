var num = prompt("Introduce un número entero");
var resultado= parImpar(num);

	function parImpar(num) {
	  if(num % 2 == 0) {
	    return "par";
	  }
	  else {
	    return "impar";
	  }
	}
	alert("El número "+num+" es "+resultado);