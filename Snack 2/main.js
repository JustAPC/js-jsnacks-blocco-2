let nomi = ["Luca ", "Paolo ", "Daniele ", "Marco ", "Michele "]

let cognomi = ["Rossi","Ferrari","Russo","Bianchi","Romano"]

let lista = []

for (i=0; i < nomi.length; i++) {
    const numeroRandomNomi = Math.floor(Math.random() * (nomi.length))
    console.log (`Numero random nomi: ${numeroRandomNomi}`)
    const numeroRandomCognomi = Math.floor(Math.random() * (cognomi.length))
    console.log (`Numero random nomi: ${numeroRandomCognomi}`)

    const nomeCognome = ` ${nomi[numeroRandomNomi]} ${cognomi[numeroRandomCognomi]}`
    document.getElementById("risultato").innerHTML = nomeCognome
}