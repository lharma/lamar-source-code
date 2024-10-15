const DOLLAR = 15.93;
const NAIRA =  102.63;
document.getElementById("calculate").onclick= function(){
   let currency;
   try{
    if(document.getElementById("cd").checked){
        currency = document.getElementById("textfield").value;
        currency = Number(currency);
        currency = cedisToDollar(currency);
        document.getElementById("display").innerHTML = currency.toFixed(2) + " $"
    }
  else  if(document.getElementById("cd").checked){
        currency = document.getElementById("textfield").value;
        currency = Number(currency);
        currency = DollarToCedis(currency);
        document.getElementById("display").innerHTML = currency.toFixed(2) + " Cedis"
    }
   else if(document.getElementById("cn").checked){
        currency = document.getElementById("textfield").value;
        currency = Number(currency);
        currency = CedisToNaira(currency);
        document.getElementById("display").innerHTML = currency.toFixed(2) + " N"
    }
    else if(document.getElementById("nc").checked){
        currency = document.getElementById("textfield").value;
        currency = Number(currency);
        currency = NairaToCedis(currency);
        document.getElementById("display").innerHTML = currency.toFixed(2) + " Cedis"
    }
    else{
        document.getElementById("display").innerHTML = "Select Unit"
        alert("select unit")
    }
}
catch(error){
    document.getElementById("display").innerHTML = "User input must me value/Number"
}
}
// currency conversion fucntions
function cedisToDollar(currency){
    return  currency/DOLLAR;

}
function DollarToCedis(currency){
  
    return  currency * DOLLAR;

}
function CedisToNaira(currency){
    return  currency / NAIRA;
}
function CedisToNaira(currency){
    return  currency * NAIRA;
}
