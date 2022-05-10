// EXERCÍCIO 1 - VERIFICAR PALINDROMO

// Solução 1
// function verificaPalindromo(string){
//     if(!string) return "String Inexistente";

//     return string.split("").reverse().join("") === string
// }

// console.log(verificaPalindromo("ama"));


// Solução 2
// function verificaPalindromo2(string){
//     if(!string) return "String Inexistente";

//     for(let i = 0; i < string.length / 2; i++){
//         if(string[i] !== string[string.length - 1 - i]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(verificaPalindromo2("ovo"));


// EXERCÍCIO 2 - ARRAY PARES

function substituirPares(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!")
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let ar = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituirPares([ar]));