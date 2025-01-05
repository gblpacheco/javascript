let NAME = lines.shift();
let SALARY = parseFloat(lines.shift());
let SALES = parseFloat(lines.shift());
let TOTAL = (SALARY + (SALES*0.15)).toFixed(2);

console.log(`TOTAL = R$ ${TOTAL}`);