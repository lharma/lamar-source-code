const Dollar = 15.93;
const NAIRA =  102.63;
document.getElementById("calculate").onclick= function(){
   let currency;
    if(document.getElementById("cd").checked){
        currency = document.getElementById("textfield").value;
        currency = Number(currency);
        currency = cedisToDollar(currency);
        document.getElementById("display").innerHTML = currency + "Cedis"
    }
}
// currency conversion fucntions
function cedisToDollar(currency){
    return  currency * DOLLAR;

}
function DollarToCedis(currency){
    return  currency/DOLLAR;

}
function CedisToNaira(currency){
    return  currency * NAIRA;
}
function CedisToNaira(currency){
    return  currency / NAIRA;
}
