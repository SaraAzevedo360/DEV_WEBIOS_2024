/*let grupo01 = ['Giovani', 'Gabi', "Eugenio" , 'Sara']

console.log(grupo01.length);

let carros = ['celta', 'uno', 'pulse', 'fastback', 'yaris']
console.log( carros [4] , carros [3] );

// contagem 0,1,2,3
console.log( grupo01[3]);
console.log(typeof grupo01[3]);*/

// metodo

//let cupons = 'DESC10'

//let novo = cupons.toLocaleLowerCase()
/*let maior = cupons.toLocaleLowerCase()
console.log(maior);
let menor = cupons.toLocaleUpperCase()
console.log(menor);

let IMC = 19.937889474
let novoValor = IMC.toFixed(2);
console.log(IMC);
console.log(novoValor);*/


/*let nome = prompt('Qual a sua nome:').toLocaleUpperCase
alert('Olá, ${nome}!')
let idade = prompt('Qual a sua idade:')
let bairro = prompt('Qual a seu bairro:')

let num1, num2, soma
 num1 = Number(prompt('Digite um numero:'));
 num2 = Number(prompt('Digite o segundo numero:'));

soma = num1 + num2
alert('O valor da soma dos números é: ${soma}')
console.log(soma)*/

// Substring

/*let navegador = 'Brave';
let novaString = navegador.substring(2)
let novaSubString = navegador.substring(1, 3)
let jomatas = navegador.charAt(3)
console.log(novaString)
console.log(novaSubString)
console.log(jomatas)

let frase = 'Na moral mano!'
console.log(frase);
let novaF = frase.split(" ") // spçit separa realiza ação de acordo com o que está no parametro
console.log(novaF);*/

/*
= - Atribuição 

== - Comparação ex: true == true

=== - Faz comparação dos tipos, verifica se texto é igual ao numer
ex: "texto" === 7
*/

// verificar se o Caio está com a blusa do IOS
let CaioComBlus = false

if (CaioComBlus == true) {
    console.log("Caio pode assistir a aula!")
}

console.clear

// Só passa se atingir 1000 pontos

let pontos = 1000

if (pontos >= 1000) {
    console.log("Passou para fase 2!")
}

console.clear

let CaioComBlusa = true

if (CaioComBlusa == true) {
    console.log("Caio pode assistir a aula!")
}
else {
    console.log("Caio não pode assistir a aula!")
}

console.clear

// resto da divisão do numero por 2 for 0 então é par 
// resto da divisão do numero por 2 for 1 então é impar 
let imparPar = 23

if (imparPar % 2 == 0) {
    console.log("Par!")
}
else {
    console.log("Impar!")
}

console.clear

let media, faltas;

media = 6.8
faltas = 2

if (media >= 7 && faltas <= 5) {
    console.log("Aluno aprovado!")
}
else if (media >= 6.5 && faltas <= 5) {
    console.log("Aluno Aprovado por conselho!")
} else {
    console.log("Aluno Reprovado!")
}
console.log('Fim')

console.clear

// peso/(altura x altura)

/*let peso, altura, imc;

peso = 62;
altura = 1.56;
imc = peso/(altura * altura)

if(imc <= 18.5){
    console.log("Abaixo do peso")
}
else if(imc <= 18.5 && 25){
    console.log('Peso Normal')
}else{
    console.log('Acima do peso')
}*/

/*let valor = 5;

switch (valor) { //valor == ?
    case 1: //bloco
        console.log('Você foi avaliado com ótimo')
        break; // ponto de parada
    case 2:
        console.log('Você foi avaliado com bom')
        break;
    case 3:
        console.log('Você foi avaliado com regular')
        break;
    case 4:
        console.log('Você foi avaliado com ruim')
        break;
    case 5:
        console.log('Você foi avaliado com pessimo')
        break;

    default:
        console.log('Você não foi avaliado')
        break;
}*/