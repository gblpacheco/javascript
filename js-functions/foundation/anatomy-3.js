// Function Expression
const incremento1 = function(n) {
    return n + 1;
}

// Arrow function é sempre anonima
const incremento2 = (n) => {
    return n + 1;
}

const incremento3 = n => {
    return n + 1;
}

const incremento4 = n => n + 1;

console.log(incremento1(1))
console.log(incremento2(5))
console.log(incremento3(24))
console.log(incremento4(199))

const sum = (a, b) => a + b;
console.log(sum(2, 3))