// vamos fazer um tabuada
// pega o elemento no HTML utilizando o id 
let valor = document.getElementById('recebeValor')
// pega o elemento utilizando o atributo name 
let resultado = document.getElementById('resultado')

const Tabuada = () => {
    // Value - guardar o valor que está sendo digitado dentro da variavel
    let guardaValor = valor.value;

    if(guardaValor == ''){
        resultado.innerHTML = "Digite um valor válido!!!"
        resultado.style.color = "red"
     //   alert("Digite um valor valido!!!")
    }else{
        resultado.style.color = "blue"
        for (i = 0; i <= 10; i++){
            let resultadoTabuada = guardaValor * i;
        
            console.log(guardaValor, 'x', i, '=' , resultadoTabuada)
            resultado.innerHTML += `${guardaValor} x ${i} =  ${resultadoTabuada} <br/> `
        }
    }

}

const Limpar = () => {
    resultado.innerHTML = '';
    valor.value = '';
}