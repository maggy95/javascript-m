var cuenta;
var cliente;
var saldo=0;
var saldoacreedor=0;
do{
  cuenta=prompt('Ingrese nro de cuenta:');    
  if (cuenta=0 && cuenta.length === 12)
  {
   cliente=prompt('Ingrese el nombre del cliente:');
    saldo=parseFloat(prompt('Ingrese su saldo actual:'));
      if (saldo>0)
      {
        saldoacreedor=saldoacreedor+saldo;
        document.write(cliente+' tiene saldo acreedor<br>');
      }
      else
      {
        if (saldo<0)
        {
          document.write(cliente+' tiene saldo deudor<br>');
        }
        else
        {
          document.write(cliente+' tiene saldo nulo<br>');
        }
      }      
    }
    else{
      alert("Escribir nuevamente");
    }
  }while(cuenta>0);
document.write('Suma total de acreedores:'+saldoacreedor);