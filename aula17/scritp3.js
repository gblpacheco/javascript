
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2
}

let aluno1 = {
    nome: "Gabriel",
    notas: [8, 10],
    media: calcMedia
}

let aluno2 = {
    nome: "João",
    notas: [8, 3.5],
    media: calcMedia
}

console.log(aluno1.nome)
console.log(aluno1.media())
console.log(aluno2.nome)
console.log(aluno2.media())
