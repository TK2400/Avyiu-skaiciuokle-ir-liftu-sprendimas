console.log(liftas(0, 2, 0))

function liftas(l, r, c) {

    const distLeft = Math.abs(l - c)
    const distRight = Math.abs(r - c)

    if (distRight <= distLeft) {
        return "desinysis"
    }
    return "kairysis"
}

/*Liftai
3-jų aukštų name yra du liftai – kairysis ir dešinysis. Parašykite funkciją, kuri
priima 3 argumentus eilės tvarka:
• kairys – aukštas, kuriame yra kairysis liftas
• dešinys - aukštas, kuriame yra dešinysis liftas
• kvietimas - aukštas, iš kurio kviečiamas liftas
Funkcija turi grąžinti pasirinkto iškvietimui - artimiausio lifto pavadinimą
("dešinysis" arba "kairysis"). Jei abiejų liftų atstumas vienodas – pasirinkti
dešinį.
pvz:
• liftas(0, 1, 0) // => "kairysis"
• liftas(0, 1, 2) // => "dešinysis"
• liftas(0, 0, 0) // => "dešinysis"*/