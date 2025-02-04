// function somar (x, y) {
//     return x + y;
// }

// USANDO QUANDO TIVER MAIS QUE UMA LINHA
// const somar = (x, y) => {
//     let res = x + y;
//     return res;
// }


//USANDO APENAS QUANDO TIVER UMA LINHA
// const somar = (x, y) => x + y;



// function sobrenome(sob) {
//     return `Gabriel ${sob}`
// }

//AINDA MAIS REDUZIDO
const sobrenome = sob => `Gabriel ${sob}`;

// console.log(somar(10, 20));

console.log(sobrenome('Pacheco'));