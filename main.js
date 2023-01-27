let pais = prompt ("ingrese moneda de origen (paises disponibles: argentina, brasil, chile, bolivia y paraguay) ");
'${pais}';
let moneda = prompt ("ingrese moneda de cambio (dolar/euro)");
'${moneda}';
let cantidad = prompt ("ingrese cantidad a cambiar")
'$(cantidad)'

if (moneda == "dolar"){
    if (pais == "brasil"){
      alert("1 real es igual a 0.19 usd");
      alert( cantidad + " reales es igual a" + cantidad*0.19 + " dolares");
    }else if (pais == "argentina"){
      alert("1 peso argentino es igual a 0.0054 usd");
      alert(cantidad + " pesos es igual a" + cantidad*0.0054 + " dolares");
    }else if(pais == "chile"){
      alert("1 peso chileno es igual a 0.0012 usd" );
      alert(cantidad + " peso chileno es igual a" + cantidad*0.0012 + " dolares");
    }else if(pais == "bolivia"){
      alert("1 boliviano es igual a 0.14 usd ");
      alert(cantidad + " boliviano es igual a" + cantidad*0.14 + " dolares");
    }else if(pais =="paraguay"){
      alert("1 guarani es igual a 0.00013 usd");
      alert(cantidad+ " guaranies es igual a" + cantidad*0.00013 + " dolares");
    }else{
      alert("la moneda indicada no esta disponible en este momento");
    }
}else if (moneda == "euro"){
 
    if (pais == "brasil"){
      alert("1 real es igual a 0.18 eur");
      alert(cantidad + " reales es igual a" + cantidad*0.18 + " euros");
    }else if (pais == "argentina"){
      alert("1 peso argentino es igual a 0.0050 eur");
      alert(cantidad + " pesos argentinos es igual a " + cantidad*0.0050 + " euros");
    }else if(pais == "chile"){
      alert("1 peso chileno es igual a 0.0011 eur" );
      alert(cantidad + "pesos chilenos es igual a " + cantidad*0.0011 + " euros");
    }else if(pais == "bolivia"){
      alert("1 boliviano es igual a 0.13 eur ");
      alert(cantidad + " bolivianos es igual a " + cantidad*0.13 + " euros");
    }else if (pais == "paraguay"){
      alert("1 guarani es igual a 0.00012 eur");
      alert(cantidad + " guaranies es igual a " + cantidad*0.00012 + " euros");
    }else{
      alert("la moneda indicada no esta disponible en este momento");
    }
  
}else{
    alert("la transaccion indicada no esta disponible en este momento");
     }
