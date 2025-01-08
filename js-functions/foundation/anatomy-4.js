// Função anonima
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    let x = 3
    console.log(`Resultado: ${a + b + c}`);
    console.log(x);
})(1, 2, 3);

(function () {
    let x = 158
    console.log(x);
})();

(() => {
    console.log('Arrow #01');
})();

(() => console.log('Arrow #02'))();