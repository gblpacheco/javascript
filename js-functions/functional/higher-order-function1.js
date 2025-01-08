// Passando uma função como parâmetro para outra função

function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello!')
}

run(sayHello)