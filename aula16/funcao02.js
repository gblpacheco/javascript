// Caso não seja passado um parâmetro, o parâmetro opcional será 0
function soma (n1=0,n2=0) {
    return n1 + n2;
}

console.log(soma(7,3));

// Se você não passar um dos parâmetros, o resultado será NaN (Not a Number)