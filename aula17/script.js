let alunos = { 
    nome: "Igor",
    notas: [7.5, 5.0]
}

// Criando uma nova variável e uma nova propriedade
var novaPropriedade = "sobrenome";

// console.log(alunos["nome"]);
// console.log(alunos.notas);
// console.log(alunos.notas[0]);
// console.log(alunos.notas[1]);

// Adicionando uma nova propriedade
alunos.matricula = 12345;

// Adicionando uma nova propriedade
// alunos["sobrenome"] = "Oliveira"
alunos[novaPropriedade] = "Oliveira"

console.log(alunos)