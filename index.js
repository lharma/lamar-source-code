
document.getElementById("calculate").onclick = function(){
    let temp;
    if(document.getElementById("cf").checked){
        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = tocelcius(temp);
        document.getElementById("display").innerHTML = temp.toFixed(2) + "C";

    }
   else if(document.getElementById("fc").checked){
        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = tofereinheit(temp)
        document.getElementById("display").innerHTML = temp.toFixed(2) + "F";

    }
    else if(document.getElementById("ck").checked){
        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = toKelvin(temp);
        document.getElementById("display").innerHTML = temp.toFixed(2) + "K";

    }
    else if(document.getElementById("kc").checked){
        temp = document.getElementById("textfield").value;
        temp = Number(temp);
        temp = KelvinToCelcius(temp);
        document.getElementById("display").innerHTML = temp.toFixed(2) + "C";

    }
    else{
        document.getElementById("display").innerHTML = "Select a unit";
    }
}
// temperature conversion function
function tocelcius(temp){
    return (temp-32)*(5/9);
}
function tofereinheit(temp){
    return (temp * 9/5) + 32;
}
function toKelvin(temp){
    
    return temp + 273.15;
}
function KelvinToCelcius(temp){
    return temp - 273.15;

}
