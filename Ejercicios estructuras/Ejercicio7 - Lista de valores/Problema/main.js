var lista1=0;
  var i=0;
  var numero;
  while(i<3)
  {
    numero=parseInt(prompt('Ingrese valor de la primer lista:'));
    lista1+=numero;
    i++;
  }
  var lista2=0;
  i=0;
  while(i<3)
  {
    numero=parseInt(prompt('Ingrese valor de la segunda lista:'));
    lista2+=numero;
    i++;
  }
  if (lista2<lista1)
  {
    document.write('Tiene mayor valor la lista1');
  }
  else
  {
    if (lista1<lista2)
    {
      document.write('Tiene mayor valor la lista2');
    }
    else
    {
      document.write('Tienen el mismo valor acumulado ambas listas');
    }
  }