let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let Media = (((A * 3.5) + (B * 7.5)) / 11).toFixed(5);

console.log(`MEDIA = ${Media}`);