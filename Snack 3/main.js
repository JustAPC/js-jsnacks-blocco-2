let numeri = ["8", "5", "7", "6", "3"]

let somma = 0;

for (i=0; i < numeri.length; i = i + 2) {
    console.log(numeri[i])
    
    document.getElementById("risultato").innerHTML = somma
}