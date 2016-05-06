var n1=parseInt(prompt("ingrese nu1",""));
	var n2=parseInt(prompt("ingrese nu2",""));
	var n3=parseInt(prompt("ingrese nu3",""));
	function menor(n1,n2,n3){
		if (n1<=n2 && n1<=n3) {
			return n1;
		}else{
			if(n2<=n1 && n2<=n3){
				return n2;
			}
		}
			if(n3<=n1 && n3<=n2){
				return n3;
			}
		}
	alert("El menor numero es: "+menor(n1,n2,n3)+"");