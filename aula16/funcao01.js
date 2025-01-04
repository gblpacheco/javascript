function parimp (n) {
    if (n%2 == 0) {
        return `O número ${n} é par!`
    } else {
        return `O número ${n} é ímpar!`
    }
}

let res = parimp(6);
console.log(res);