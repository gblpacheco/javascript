let values = lines.shift().trim().split(" ");
codigo1 = parseInt(values.shift());
quantidade1 = parseInt(values.shift());
valor1 = parseFloat(values.shift());

values = lines.shift().trim().split(" ");
codigo2 = parseInt(values.shift());
quantidade2 = parseInt(values.shift());
valor2 = parseFloat(values.shift());

let valor = ((quantidade1 * valor1) + (quantidade2 * valor2)).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valor}`);