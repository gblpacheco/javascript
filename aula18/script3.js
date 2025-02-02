function calcImovel(m, room) {
    const price = 3000;
    if (room == 1) {
        return console.log(price * m);
    } else if (room == 2) {
        return console.log(price * 1.2 * m);
    }  return console.log(`A sua casa custa R$ ${price * 1.5 * m}`);
}

let metragem = 123;
let quartos = 3;
let price = calcImovel(metragem, quartos);