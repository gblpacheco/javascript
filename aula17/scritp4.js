
function calcMedia(){
    return (this.nota1 + this.nota2) / 2
}

let turma = [{
    nome: "Igor",
    nota1: 7,
    nota2: 7,
    media: calcMedia
},
{
    nome: "João",
    nota1: 4,
    nota2: 3,
    media: calcMedia
},
{
    nome: "Gabriel",
    nota1: 8,
    nota2: 7.5,
    media: calcMedia
}
]

console.log(`O aluno ${turma[0].nome} teve uma média de: ${turma[0].media()}`)
console.log(`O aluno ${turma[1].nome} teve uma média de: ${turma[1].media()}`)
console.log(`O aluno ${turma[2].nome} teve uma média de: ${turma[2].media()}`)