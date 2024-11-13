class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
    this.nome = nome;
    this.ano = ano;
    this.altura = altura;
    this.isCracha = isCracha;
    this.isCamisa = isCamisa;
    this.cor = cor;
    }
    retornaIdade(){
        let DataCompleta = new Date()
        let pegaAno = DataCompleta.getFullYear()
        return 2024 - this.ano
        
    }
}

let aluno1 = new Aluno("Sara", 2001, 1.56, true, true, "Black");


let aluno2 = new Aluno("Manasses", 1997, 1.90, true, true, "Black");
console.log(aluno1)
console.log(aluno1.retornaIdade())
console.log(aluno2)