// Array

let frutas = ["morango", 
    "banana", 
    "mexirica", 
    "abacaxi", 
    "manga",
    "macã", 
    "pessego",
    "melancia"] /// coloque o nome de 8 frutas
    
    frutas.forEach((valor, indice) => {
        console.log(valor);
        console.log(indice);
    })


  /*  function Percorrer(indice, valor){
        console.log(valor);
        console.log(indice);
    }

    for(i = 0; i <= frutas.length; i++){
        console.log(frutas[i]);
        console.log(i);
    }*/

    console.clear()

    let numeros = [4, 9, 16, 25, 78, 34]

    // Trazer um novo array atualizando com a raiz quadrada de cada número do array

    let numerosDois = numeros.map(Math.sqrt)
    let maiorNumero = Math.max.apply(Math, numeros)
    let menorNumero = Math.min.apply(Math, numeros)

    console.log(maiorNumero + " " + menorNumero)
 //   console.log(numeros)
 //   console.log(numerosDois)

 let filtraNumero = numeros.filter((valor) =>{
    return valor >= 16
 })

 // criando um novo array onde irá conter apenas os numeros maiores ou iguais a 16

 console.log(filtraNumero)
 console.log(numeros)

 console.clear()

 let tarefa = [
    {
        tarefa: "Dormir",
        isFeita: true
    },
    {
        tarefa: "limpar",
        isFeita: false
    },
    {
        tarefa: "torcer",
        isFeita: true
    }
]

let retornaTrue = tarefa.filter((item) => {
    return item.isFeita === true
})

console.log(retornaTrue)

// find para no primeiro
// filter olha todos