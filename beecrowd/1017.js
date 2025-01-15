const consumo = 12;
let time = parseInt(lines.shift());
let veloMedia = parseInt(lines.shift());

// Consumo do carro 12km/L
// velocidade em km/h

let litros = (time * veloMedia) / consumo;

console.log(litros.toFixed(3))