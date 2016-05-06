var palabra=prompt("Ingresa la palabra que deseas traducir ( casa, mesa, perro, gato)");
 switch (palabra) {
 case 'casa': 
	 document.write("<h1><center>HOUSE</center></h1> <br>");
	 document.write('<center><img src="../casa.jpg"/></center>');
 break;
 case 'mesa':
	 document.write("<h1><center>TABLE</center></h1> <br>");
	 document.write('<center><img src="../mesa-de-centro.jpg"/></center>');
 break;
 case 'perro':
	 document.write("<h1><center>DOG</center></h1> <br>");
	 document.write('<center><img src="../game-over1.jpg"/></center>');
 break; 
 case 'gato':
	 document.write("<h1><center>CAT</center></h1> <br>");
	 document.write('<center><img src="../Nota-1153-ashera-cat1.jpg"/></center>');
 break;
 default:
     alert("Ingresar nuevamente la palabra a traducir (casa, mesa, perro, gato)"); 
  }
/*
document.write("<h2>0</h2>");
      document.write('<img src="f_e/status/imagen10.gif"/>');
  case 'mesa': document.bgColor='#00ff00';     
      */
