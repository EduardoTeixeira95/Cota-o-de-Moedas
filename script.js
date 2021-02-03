
function validar(){
var cotacao = document.getElementById("cotacao").value;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if (this.readyState == 4 && this.status == 200) {
var json = JSON.parse(this.responseText);
if (cotacao == 'USD'){
document.getElementById("texto").innerHTML = "R$ " + json.USD.high
}
if (cotacao == 'CAD'){
document.getElementById("texto").innerHTML = "R$ " + json.CAD.high
}
if (cotacao == 'EUR'){
document.getElementById("texto").innerHTML = "R$ " + json.EUR.high
}
if (cotacao == 'BTC'){
document.getElementById("texto").innerHTML = "R$ " + json.BTC.high
}
}
}
xhttp.open("GET","https://economia.awesomeapi.com.br/all/" + cotacao + '-BRL',true,)
xhttp.send();

}

