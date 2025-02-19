//Push adiciona um novo elemento no array
//Shift remove o primeiro elemento do array
//Pop remove o último elemento do array

let carros = ['BMW', 'Ferrari', 'Mercedes']
console.log(`1. ${carros[1]}`)

carros[1] = 'Audi'
console.log(`2. ${carros}`)

carros.push('Volvo')
console.log(`3. ${carros}`)

console.log(`4. ${carros.length}`)