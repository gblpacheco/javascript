
function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
}

let turma = [
    criarAluno("Igor", 6, 9),
    criarAluno("João", 6, 10),
    criarAluno("Maria", 6, 5.8),
    criarAluno("Guilherme", 2, 5.8)
]

// let aluno = turma[0]
// let aluno1 = turma[1]

// turma.forEach(function(elemento){
//     console.log(elemento)
// })

for(var aluno of turma) {
    console.log(`O(a) Aluno(a) ${aluno.nome} teve a media de: ${aluno.media()}`)
}