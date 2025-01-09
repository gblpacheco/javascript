let R = parseFloat(lines.shift()).toFixed(2);
const pi = 3.14159;
var volume = ((4/3) * pi * Math.pow(R, 3));

console.log(`VOLUME = ${volume.toFixed(3)}`);