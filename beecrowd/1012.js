let values = lines.shift().trim().split(" ");
A = parseFloat(values.shift());
B = parseFloat(values.shift());
C = parseFloat(values.shift());

const pi = 3.14159;

let areaTri = (A * C) / 2;
let areaCir = pi * Math.pow(C, 2);
let areaTra = ((A + B) * C) / 2;
let areaQua = Math.pow(B, 2);
let areaRet = A * B;

console.log(`TRIANGULO: ${areaTri.toFixed(3)}`)
console.log(`CIRCULO: ${areaCir.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTra.toFixed(3)}`)
console.log(`QUADRADO: ${areaQua.toFixed(3)}`)
console.log(`RETANGULO: ${areaRet.toFixed(3)}`)