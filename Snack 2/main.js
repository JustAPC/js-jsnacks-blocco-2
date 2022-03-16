let nomi = ["Luca ", "Paolo ", "Daniele ", "Marco ", "Michele "]

let cognomi = ["Rossi","Ferrari","Russo","Bianchi","Romano"]

for (i=0; i < nomi.length; i++) {
    let y = Math.floor(Math.random() * (cognomi.length))
    let nome = nomi[i]
    let cognome = cognomi[y]
}

document.getElementById("risultato").innerHTML = nome + cognome