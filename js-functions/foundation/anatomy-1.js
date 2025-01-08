// Declaração da Função

function sayHello() {
    console.log('Hello World!');
} 

sayHello(); // Chamada da Função




// Função com Parâmetros
function SayHelloTo(name) {
    console.log(`Hello ${name}`)
}

SayHelloTo('Gabriel')

function retunrHi() {
    return 'Hi';
}

retunrHi(); // Não irá imprimir nada
let greeting = retunrHi(); // Atribuindo o retorno da função a uma variável
console.log(greeting); // Hi
console.log(retunrHi()); // Hi




// Função com Parâmetros e Retorno
function returnHiTo(name) {
    return `Hi ${name}`;
}

console.log(returnHiTo('Gabriel')); // Hi Gabriel