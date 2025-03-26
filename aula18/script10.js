let personagem= {
    nome: 'Gabriel',
    idade: 30,
    carros: [
        {
            modelo: 'Fiat', 
            ano: '1999'
        },
        {
            modelo: 'Chevrolet', 
            ano: '2021'
        },
        {
            modelo: 'Ford', 
            ano: '2005'
        }
    ]
}

console.log(personagem.carros[1].modelo)