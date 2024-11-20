let URL = "https://viacep.com.br/ws/01001000/json/"

//let cep = document.getElementsById(`cep`)

async function BuscaCep () {
  await fetch(URL).then((response) => {
    // Transformar json em obj
    return response.json();

  }).then((response) => {
    document.getElementsById(`cep`).value = response.cep;
    document.getElementsById(`logradouro`).value = response.logradouro;
    document.getElementsById(`complemento`).value = response.complemento;
    document.getElementsById(`bairro`).value = response.bairro;
    document.getElementsById(`estado`).value = response.estado;
    

  })

}

BuscaCep();