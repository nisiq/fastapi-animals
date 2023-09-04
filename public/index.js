//Fazer chamada com axios - backend
// Chamada no backend - Axios faz um request, response para o front

async function carregarAnimais() {
     //promisse - await acontecerá assincronamente, então (response) mostre o conteúdo
    const response = await axios.get('http://127.0.0.1:8000/animais')
    //
    const animais = response.data //json de retorno

    //Pegar o componente pelo ID "me conectar com o componente"
    const lista = document.getElementById('lista-animais')

    //Percorrer item a item, "para cada" animal: fazer a ação abaixo
    animais.forEach(animal => {

        //Para cada animal = criar um li e colocar dentro do forms

        //Criação de um componente dinamicamente
        const item = document.createElement('li')
        item.innerText = animal.nome //Inserir o nome do animal dentro do forms

        //Inserir o li dentro da lista
        lista.appendChild(item)
        
    });
}

    
//cors - permitir requisições de origens diferentes do backend

function app() {
    console.log('App iniciada')
    carregarAnimais()
}

app()
