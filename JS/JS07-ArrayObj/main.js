// array de objetos

/*let aluno = {
    nome:'Sara',
    idade: 13,
    altura: 1.56,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'black',
    notas: [10,8,9,7,8.5] 
}
//retornar objeto
console.log(`O nome do aluno é ${aluno.nome}`)

console.log(aluno.idade)

console.log(aluno.notas[2])*/

/*console.clear()

let IOS = [
    {
    nome:'Sara',
    idade: 13,
    altura: 1.56,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'black',
    notas: [10,8,9,7,8.5] 
    },

    {
        nome:'Giovani',
        idade: 25,
        altura: 1.70,
        isCracha: true,
        isCamisa: true,
        isPaciencia: true,
        isChora: true,
        cor: 'black',
        notas: [10,8,9,7,9] 
        },
        {
            nome:'Madu',
            idade: 18,
            altura: 1.50,
            isCracha: true,
            isCamisa: true,
            isPaciencia: true,
            isChora: true,
            cor: 'black',
            notas: [10,8,9,9,9] 
            },
]

console.log(IOS[1].isCamisa, IOS[1].isCracha)

for(i = 0; i < IOS.length; i++){
    let login = IOS[i]
if (login.isCracha = true){
    console.log("O aluno tem cracha")
}else{
    console.log("O aluno não tem cracha")
}
}

console.clear()*/

let aluno = [
    {
    nome:'Sara',
    idade: 13,
    altura: 1.56,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'black',
    notas: [10,8,9,7,8.5] 
},
]
console.log(aluno)

console.log(JSON.stringify(aluno))

let jsonito = ''
console.log(JSON.parse(jsonito))
