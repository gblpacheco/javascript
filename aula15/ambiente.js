// Array
let num = [5, 8, 10];
// Adicionando um valor no indice 3
num[3] = 6
// Adicionando um valor no final do array
num.push(7)
num.push(9)

// // Mostrando o array
console.log(`Vetor desordenado é: ${num}`)
// // Mostrando a primeira posição do array antes de ordenado
// console.log(`O primeiro valor do vetor desordenado é: ${num[0]}`)
// // Mostrando o array ordenado
console.log(`O vetor em ordem fica: ${num.sort((a, b) => a - b)}`)
// // Mostrando a primeira posição do array depois de ordenado
// console.log(`O primeiro valor do vetor ordenado é: ${num[0]}`)
// // Mostrando quantidade de posições
// console.log(`O vetor tem ${num.length} posições.`)

// for (let i = 0; i < num.length; i++) {
//     num.sort((a, b) => a - b);
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }


// For simplificado, so funciona para arrays e objetos.
for (let i in num) {
    num.sort((a, b) => a - b);
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Buscando um valor no array
let pos = num.indexOf(7);
// Condição para verificar se o valor foi encontrado
if (pos == -1) {
    // Quando o valor não é encontrado o retorno é -1
    console.log('O valor não foi encontrado')
} else {
    // Quando o valor é encontrado o retorno é a posição
    console.log(`O valor está na posição ${pos}`);
}

