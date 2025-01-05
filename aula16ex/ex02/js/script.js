// Receber os dados do usuário.
// Testar se ele digitou algo ou não, não podendo repetir o valor;
// Após os testes de validez, adicionar o valor ao array;
// Após adicionar o array, aguardar o usuário pedir para calcular;
// Ao calcular, o programa mostrará: 
// - O tamanho do Array;
// - O maior valor;
// - O menor valor;
// - A soma dos valores;
// - A média dos valores;

let num = document.getElementById('number')
let lista = document.getElementById('textarea')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    return l.includes(Number(n))
}

function adicionar (){
    // event.preventDefault();
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function calcular(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de calcular.')
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${total} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é ${soma/total}.<br>`
    }
}