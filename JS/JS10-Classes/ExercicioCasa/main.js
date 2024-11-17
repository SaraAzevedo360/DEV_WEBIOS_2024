class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        const taxa = 1.5 / 100;
        const novoSalario = this.salario - (this.salario * taxa);
        return novoSalario;
    }

    contaCorrente() {
        const taxa = 3.6 / 100;
        const novoSalario = this.salario - (this.salario * taxa);
        return novoSalario;
    }

    contaEstudante() {
        const taxa = 1.2 / 100;
        const novoSalario = this.salario - (this.salario * taxa);
        return novoSalario;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Número da Conta: ${this.numeroConta}`);
    }
}

const conta1 = new ContaBancaria('João', 28, 5000, 'Masculino', '1234', '0001');
const conta2 = new ContaBancaria('Maria', 24, 4500, 'Feminino', '5678', '0002');
const conta3 = new ContaBancaria('Pedro', 20, 3000, 'Masculino', '9101', '0003');

console.log(ContaBancaria);
conta1.imprimirDados();
console.log(`Novo Salário (Conta Poupança): R$ ${conta1.contaPoupanca().toFixed(2)}\n`);

console.log(ContaBancaria);
conta2.imprimirDados();
console.log(`Novo Salário (Conta Corrente): R$ ${conta2.contaCorrente().toFixed(2)}\n`);

console.log(ContaBancaria);
conta3.imprimirDados();
console.log(`Novo Salário (Conta Estudante): R$ ${conta3.contaEstudante().toFixed(2)}\n`);
