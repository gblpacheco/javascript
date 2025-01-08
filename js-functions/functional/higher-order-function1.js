// Passando uma função como parâmetro para outra função

function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!')
}

run(sayHello)

run(function() {
    console.log('run!!')
})

const result = run(Math.random)
console.log(result)