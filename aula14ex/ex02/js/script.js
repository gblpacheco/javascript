function contagem (event) {
    event.preventDefault();
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;
    var res = document.getElementById('res');

    if (inicio.length ==  0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!';
        alert('ERRO! Faltam dados.');
    } else {
        res.innerHTML = 'Contando: <br>';
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
        if (passo <= 0) {
            alert('Passo inválido! Considerando passo 1.');
            passo = 1;
        }
        if (inicio < fim) {
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += i + ' \u{1F449} ';
            }
        } else {
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += i + ' \u{1F449} ';
            }
        }
        } 
    res.innerHTML += '\u{1F3C1}';
}