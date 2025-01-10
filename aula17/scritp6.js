
function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}


let a = new aluno("Igor", 7, 8)
let b = new aluno("João", 5, 8)
console.log(a.media())
console.log(b.media())
