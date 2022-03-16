let numero = parseInt (prompt ("Inserisci un numero"));

let dispari = (numero + 1)

if (numero % 2 == 0) {
    document.getElementById("risultato").innerHTML = numero + " è pari"
} else {
    document.getElementById("risultato").innerHTML = dispari + " è il successivo numero pari"
}
