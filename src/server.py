from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
#Optional = Campo opcional
from pydantic import BaseModel
from uuid import uuid4 #códigosMaioresAleatórios

#axios = consumo de api

app = FastAPI()

# autorizacar conexao backend and front end - origem de onde a aplicação web está hospedada/irá consumir
origins = ['http://127.0.0.1:5500']
# middleware =  no meio do caminho, habilitar o cors:
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)



class Animal(BaseModel):
    id: Optional[str] = None
    nome: str
    idade: int
    sexo: str
    cor: str

banco: List[Animal] = []


@app.get('/animais')


def listar_animais():
    return banco
 

@app.get('/animais/{animal_id}') #Aplicativo pedir dados para o backend
def obter_animal(animal_id: str):
    for animal in banco:
        if animal.id == animal_id:
            return animal
    return {'error': 'Animal não encontrado'}
#para cada animal em banco:
    #se o id do animal for igual ao animal id recebido da rota:
        #retorno o animal


@app.delete('/animais/{animal_id}')
def remover_animal(animal_id: str):
    posicao = -1
    # buscar a posicao do animal
    for index, animal in enumerate(banco): #para cada animal do banco (enumerate: retornará posição e objeto)
        if animal.id == animal.id:
            posicao = index
            break


    if posicao != -1:
        banco.pop(posicao) #pop remove do final ou posicao desejada
        return animal.nome, {'Removido com Sucesso'}
    else:
        return {'error': 'Animal não encontrado'}


@app.post('/animais') #Aplicativo enviar dados para o backend
def criar_animal(animal: Animal):
    animal.id = str(uuid4())
    banco.append(animal)
    return None