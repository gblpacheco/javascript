function carregar (){
    var msg = document.getElementById('saudacao');
    var img = document.getElementById('foto');
    var data = new Date();
    var minutos = data.getMinutes();
    var hora = data.getHours();
    msg.innerHTML = `${hora} horas e ${minutos} minutos.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'img/dia.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'img/noite.jpeg';
        document.body.style.background = '#515154';
    }
}