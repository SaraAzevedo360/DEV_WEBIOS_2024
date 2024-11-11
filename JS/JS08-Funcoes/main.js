//variaveis >> var nome;

//funçoes nome da primeira letra é maiuscula >> function NomeAluno(){}
//funções

function Contador(){
    //criar uma verificação de se o número digitado é par ou impar

    let imparPar = 151;
    let numero = 1;
    //se for impar então vamos apresentar na tela todos os numeros impares de 1 até 50
    if (imparPar% 2 == 1){
    console.log("Esse número é impar")
    for(numero; numero <= 50; numero++){
        if(numero % 2 === 1){
            console.log(numero)
        }
    }
}else if(imparPar % 2 == 0){
  
    //senão (se for par) vamos apresentar na tela todos os numeros pares de 1 até 50
    console.log("Esse número é par")
    for(numero; numero <= 50; numero++){
        if(numero % 2 === 0){
            console.log(numero)
        }
}
}
}
// funções são sempre chamadas acompanhadas com parentesses
console.log(Contador())

console.clear()

//ARROW Function

let BoasVindas = () => {
    return 'Welcome sofrendo com TCC'
}

console.log(BoasVindas())

// Os parentese servem para trazer valores qye estão fora da função para dentro dela assim conseguindo trabalhar com varios tipos de valores informados pelo usuario

let Soma = (num1, num2) => {
    return num1 + num2;
}

console.log(Soma(7,7))

console.clear()

function Clique(){
    let cliques = 0;

  //  return cliques++
  console.log(cliques = cliques + 1)
}
console.log(Clique())

let ChamaPopUp = () =>{
    alert('Parabéns você me chamou, descompensado!')
}

let PasseMouse = () =>{
    console.log('O mano passou o mouse por cima de mim')
}

