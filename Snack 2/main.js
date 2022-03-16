let nomi = ["Luca ", "Paolo ", "Daniele ", "Marco ", "Michele "]

let cognomi = ["Rossi","Ferrari","Russo","Bianchi","Romano"]
 
let nomeCognome = nomi + cognomi

for (i=0; i < nomeCognome.length; i++) {
    let nomeCompleto = nomi[i] + cognomi[i]
    console.log (nomeCompleto)
}