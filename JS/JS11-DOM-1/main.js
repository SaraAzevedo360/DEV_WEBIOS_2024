document.body.style.backgroundColor = "Black"
document.title = "SocorroDom"
document.documentElement.lang = "pt-br"

//Criação de elementos com JS

let campoNovo = document.createElement(`button`)

// inserir estilo dentro do HTML

campoNovo.style.backgroundColor = "Purple"
campoNovo.style.borderRadius = "10px"
//Informar em qual tag temos que inserir o botao

document.body.appendChild(campoNovo).innerHTML = "Enviar"