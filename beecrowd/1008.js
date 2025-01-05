let NUMBER = parseInt(lines.shift());
let VALOR = parseInt(lines.shift());
let HORAS = parseFloat(lines.shift()).toFixed(2);

let SALARIO = (VALOR * HORAS).toFixed(2);

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARIO}`);