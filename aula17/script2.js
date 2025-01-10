let aluno1 = {
    nome: "Gabriel",
    notas: [8, 10],
    // Função dentro de um objeto é um método. Método Média.
    media: function(n1, n2){
        return (n1 + n2) / 2
    }
}

let aluno2 = {
    nome: "João",
    notas: [6, 8],
    // Função dentro de um objeto é um método. Método Média.
    media: function(n1, n2){
        return (n1 + n2) / 2
    }
}

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))
console.log(aluno2.nome)
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]))
