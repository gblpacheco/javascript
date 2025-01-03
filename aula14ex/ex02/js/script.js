function tabuada (event) {
    event.preventDefault();
    var numero = document.getElementById('numero').value;
    var res = document.getElementById('textarea');

    if (numero.length == 0 ) {
        alert('Por favor, digite um número!');
    } else {
        res.innerHTML = '';
        for (var i = 1; i <= 10; i++) {
            res.innerHTML += `${numero} x ${i} = ${numero * i} \n`;
        }
    }
}