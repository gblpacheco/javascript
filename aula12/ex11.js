var idade = 65;
console.log(`Você tem ${idade} anos.`);

if (idade < 16) {
  console.log("Não vota");
} else {
    if (idade >= 16 && idade < 18) {
        console.log("Voto facultativo");
    } else{
        if (idade >= 18 && idade < 65) {
            console.log("Voto obrigatório");
        } else {
            console.log("Voto facultativo");
        }
    }
}