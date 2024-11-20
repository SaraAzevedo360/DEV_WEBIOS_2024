// API 
let URL = 'https://dog.ceo/api/breeds/image/random'

const DogApi = async () =>{
//faço a consulta ma API e retorno o JSON na variavel resp
await fetch(URL).then((response) => {
    return response.json();
}).then(response)

// pegar o retorno em JSON e transformar ele em objeto 
let exemplo = resp.json();
console.log(resp)
 
 console.log(exemplo)
} 

DogApi()
 
