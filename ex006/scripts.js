// Atividade 1:
// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

// const maca = {
//     value: 2,
// }

// const laranja = {
//     value: 3,
// }

// function mapComThis (arr, thisArg) {
//     return arr.map(function(item) {
//         return item * this.value;
//     }, thisArg);
// }

// const nums = [1,2];

// console.log('this -> Maçã', mapComThis(nums, maca));
// console.log('this -> Laranja', mapComThis(nums, laranja));

// function mapSemThis (arr){
//     return arr.map(function(item) {
//         return item * 2;
//     });
// }

// const nums = [2, 4, 6, 8, 10];

// console.log(mapSemThis(nums));




// Atividade 2:
// Filter
// Filtre e retorne todos os números pares de um array.

// function filtraPares (arr){
//     return arr.filter(callback);
// }

// function callback(item){
//     return item % 2 !== 0;
// }

// const meuArray = [1, 23, 55, 67, 30, 2, 4];

// console.log(filtraPares(meuArray));



// Atividade 03:
// Reduce
// 1.Some todos os números de um array
// 2.Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

// function somaNumeros (arr){
//     return arr.reduce(function(prev, current){
//         return prev + current;
//     });
// }

// const arr = [1, 2];

// console.log(somaNumeros(arr));

// const lista = [
//     {
//         name: 'Sabão em Pó',
//         price: 10
//     },
//     {
//         name: 'Cereal',
//         price: 12
//     },
//     {
//         name: 'Toalha',
//         price: 30
//     }
// ]

// const saldoDisponivel = 100;

// function calculaSaldo(saldoDisponivel, lista){
//     return lista.reduce(function(prev, current, index){
//         console.log('Rodade ', index + 1);
//         console.log({prev});
//         console.log({current});
//         return prev - current.price;
//     }, saldoDisponivel);
// }

// console.log(calculaSaldo(saldoDisponivel, lista));