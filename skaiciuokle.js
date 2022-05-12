function skaiciuokle(a) {
    let arr = []

    const object = {
        viena: "avis",
        kelios: "avys",
        desimtys: "avių"
    }

    for (let i = 1; i <= a; i++) {
        if (a - a === 0) {
            arr.push(`${i} ${object.viena}...`)
        }
        if (a % 10 == 1) {
            arr.push(`${i} ${object.viena}...`)
        }
        if (a % 10 == 0) {
            arr.push(`${i} ${object.desimtys}...`)
        } else {
            arr.push(`${i} ${object.kelios}...`)
        }
        return arr
    }
}

console.log(skaiciuokle(3))

// function skaiciuokle(a) {
//     let arr = []

//     const object = {
//         viena: "avis",
//         kelios: "avys",
//         desimtys: "avių"
//     }

//     for (let i = 1; i <= a; i++) {

//         if (a == 1 || a % 10 == (0 + 1)) {
//             arr.push(`${i} ${object.viena}...`)
//         }
//         if (a % 10 == 0) {
//             arr.push(`${i} ${object.desimtys}...`)
//         }
//         arr.push(`${i} ${object.kelios}...`)

//     }
//     return arr

// }