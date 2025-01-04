function fatorial(n){
    let aux = 1;
    for (let i = n; i > 1; i--){
        aux = aux * i;
    }
    return `O fatorial de ${n} é ${aux}`;
}

console.log(fatorial(5));


