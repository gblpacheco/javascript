// Função Anonima
(function (a, b, c) {
    return a + b + c
})

// Function Expression
const soma = function (a, b) {
    return a + b
}

let res = soma(5, 2)
console.log(res)

let outraSoma = soma
console.log(outraSoma(5, 1))