let values = lines.shift().trim().split(" ");
A = parseInt(values.shift());
B = parseInt(values.shift());
C = parseInt(values.shift());

let maior = Math.max(A, B, C);

console.log(`${maior} eh o maior`);