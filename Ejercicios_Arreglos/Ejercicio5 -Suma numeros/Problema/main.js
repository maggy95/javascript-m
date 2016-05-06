  var x;
  var suma=0;
  var valor;
  var datos = [ ];
    for(x = 1;x<= 10;x++ )
  {
    datos.push(parseInt(prompt("Los numeros que quieres ingresar")));
    suma=suma+datos[x-1];
  }
  document.write("Los datos son:["+datos+"]")
  document.write("<br> La suma de los valores es: "+suma+"");

