//Declarando um objeto com propriedades e valores.

let personagem = {
    nome: 'Gabriel',
    idade: 30,
    sexo: 'masculino',
    casado: true,
    caracteristicas: {
        forca: 100,
        habilidade: 90,
        destreza: 80
    },
    olhos: ['azul', 'verde', 'castanho']
}

console.log(`O personagem ${personagem.nome} tem ${personagem.idade} anos, ele possui ${personagem.caracteristicas.forca} de força. Os olhos dele são ${personagem.olhos[0]} e ${personagem.olhos[1]}`)

personagem.nome = 'Gustavo'
console.log(personagem.nome)

personagem.caracteristicas.forca += 20
console.log(personagem.caracteristicas.forca)

personagem.olhos.push('preto')
console.log(personagem.olhos)