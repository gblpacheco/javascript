
//ECMAScript Erro
//É o erro que acontece durante o tempo de execução.
//Composto por: Mensagem, Nome, Linha e Call Stack.

//DOMException
//Erros relacionados ao Document Object Model (DOM)
//Erro que está sendo relacionados que está sendo rodado numa página web.



//Tratamentos de erros
//Throw -> Error.

//Try...Catch 
//O Try verifica se tem algum erro, o Catch vai tratar esse erro. 

//Finally
//Faz parte do bloco Try...Catch.

//O Objeto Error: new Error(message, fileName, lineNumber)



// Tratamento de Erros - Atividade
// Projeto referente ao curso "Tratamento de Erros" que ministrei pela Digital Innovation One.

// Atividade: validação de erros por tipo
// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof


function validarArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError('Envie os Parâmetros');
        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Object');
        if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo Numero');
        if(arr.length !== num) throw new RangeError('Tamanho Inválido!');
        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log('Este erro é um RangeError')
            console.log(e.message)
        } else {
            console.log('Erro não esperado:' + e);
        }
    }
}

console.log(validarArray([], 5));