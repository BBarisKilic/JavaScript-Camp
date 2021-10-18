console.log("Merhaba JS!!")

//variables
let dolarDun = 9.20
var dolarBugun = 9.30
////dolarDun = "9.21"
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.20
////euroDun = 11
console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi",]

//loops
console.log("</ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<il>" + konutKredileri[i] + "</il>")
}
console.log("</ul>")