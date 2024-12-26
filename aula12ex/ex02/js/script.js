function calcularIdade(event) {
    event.preventDefault();
    var anoAtual = new Date().getFullYear();
    var anoNascimento = document.getElementById('dataNascimento').value;
    var res = document.getElementById('res');

    if (anoNascimento.length == 0 || Number(anoNascimento) > anoAtual) {
        window.alert('Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = anoAtual - Number (anoNascimento);
        var genero = '';
        if (fsex[0].checked) {
            genero = 'Homem';
        } else if (fsex[1].checked) {
            genero = 'Mulher';
        }
        res.innerHTML = `Você é um ${genero} de ${idade} anos de idade.`;
    }
}