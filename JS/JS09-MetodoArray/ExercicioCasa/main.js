
let numeros = [17, 43, 8, 4, 97, 56, 29, 95];
function ImparPar(numero) {
    if (numero % 2 === 0){
        console.log(`${numero} é Impar`);
    } else{
        console.log(`${numero} é Par`);        
    }
}
numeros.forEach(ImparPar);

let = numeros [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 59];
let Nfiltros = numeros.filter(numero => numero > 20 && numero < 80);
console.log(Nfiltros);