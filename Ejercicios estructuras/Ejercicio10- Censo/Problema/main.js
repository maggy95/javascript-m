var documento;
  var edad;
  var personas=0;
  var varones=0;
  var mujeres=0;
  var varonesmayores=0;
do{
  documento=prompt('Ingrese nro de documento:');    
  if(documento>0)
  {
  	edad=prompt("Ingresar edad:");
  	sexo=prompt("Ingresar sexo (masculino o femenino):");
  	if (sexo == "masculino")
  	{
  		varones++;
  		if(edad>=16 && edad<=65){
  			varonesmayores++;
  		}	
    }
    if (sexo=="femenino")
      { 
        mujeres++;
      } 
      personas++;
    }else{
    	alert("Ingresar nuevamente");
    }
  }while(documento>=0);
  document.write('Total de personas censadas: '+personas+'<br>');
  document.write('Cantidad de varones: '+varones+'<br>'); 
  document.write('Cantidad de mujeres: '+mujeres+'<br>');   
  document.write('Cantidad de varones entre 16 y 65 años: '+varonesmayores+'<br>');