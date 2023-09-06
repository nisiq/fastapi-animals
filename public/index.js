//Fazer chamada com axios - backend
// Chamada no backend - Axios faz um request, response para o front

async function carregarAnimais() {
     //promisse - await acontecerá assincronamente, então (response) mostre o conteúdo
    const response = await axios.get('http://127.0.0.1:8000/animais')
    //
    const animais = response.data //json de retorno

    //Pegar o componente pelo ID "me conectar com o componente"
    const lista = document.getElementById('lista-animais')
    //Carregar apenas os animais adicionados no momento
    //"zero" a lista para não duplicar
    lista.innerHTML = ''

    //Percorrer item a item, "para cada" animal: fazer a ação abaixo
    animais.forEach(animal => {
        //Para cada animal = criar um li e colocar dentro do forms
        //Criação de um componente dinamicamente
        const item = document.createElement('li')

        const linha = `${animal.nome} - idade: ${animal.idade} - cor: ${animal.cor}`

        item.innerText = linha //Inserir o nome do animal dentro do forms

        //Inserir o li dentro da lista
        lista.appendChild(item)
        
    });
}

//Fluxo de envio infos para o backend
function manipularFormulario() {
    //conectar com o componente do front pelo id 
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')

    //submit via js = função parametro e corpo ()=>{} 
    form_animal.onsubmit = async (event) => {
        //desarivar reload
        event.preventDefault()
        //pegar VALUE do input (o que foi digitado)
        const nome_animal = input_nome.value
        //mandar pro backend - POST
        //METODOS AXIOS SÃO ASSINC
        await axios.post('http://127.0.0.1:8000/animais', {
            //segundo arg - o que o backend precisa - em objeto js
            nome: nome_animal,
            idade: 4,
            sexo: 'femea',
            cor: 'branca'
        })
        //atualizar lista
        carregarAnimais()
        alert('Animal Cadastrado...')
    }


}

    
//cors - permitir requisições de origens diferentes do backend

function app() {
    console.log('App iniciada')
    carregarAnimais()
    manipularFormulario()
}

app()
