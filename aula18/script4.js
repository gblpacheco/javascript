function validar(usuario, senha) {
    if (usuario === `admin` && senha === `123456`){
        return true;
    } return false;
}


let usuario = `admin`;
let senha = `123456`;

let validacao = validar(usuario, senha);
if (validacao) {
    console.log(`Acesso concedido`);
} else {
    console.log(`Acesso negado`);
}