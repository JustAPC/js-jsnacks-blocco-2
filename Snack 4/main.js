let elementi1 = ["mele", "pere", "banane", "arance", "pesche"]

let elementi2 = ["mele", "pere", "banane"]

let lungElementi1 = (elementi1.length)

let lungElementi2 = (elementi2.length)

if (lungElementi1 > lungElementi2) {
    elementi2.push(elementi2 = elementi1)
} 
document.getElementById("risultato").innerHTML = `<div>${elementi1}</div> <div>${elementi2}</div>`