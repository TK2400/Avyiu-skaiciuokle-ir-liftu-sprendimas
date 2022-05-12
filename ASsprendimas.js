function avys(skaicius) {
    const dalys = []

    for (let i = 1; i <= skaicius; i++) {
        if (i % 10 === 1 && i !== 11) {
            dalys.push(`${i} avis... `)
        } else if (i >= 10 && i < 21 || i % 10 === 0) {
            dalys.push(`${i} avių... `)
        } else {
            dalys.push(`${i} avys... `)
        }

    }
    return dalys.join(' ')
}

const result = avys(12)
console.log(result)

/*Avių skaičiuoklė
Pateikus funkcijai sveiką skaičių, pvz 3, ji turi grąžinti String tipo duomenis:
"1 avis... 2 avys... 3 avys..."
Atkreipkit dėmesį į gramatiką skaičiuojant daugiau nei 10 avių!*/