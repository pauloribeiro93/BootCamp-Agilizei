#language: pt
Funcionalidade: Listagem

    Como usuario, desejo acessar a Listagem

Cenario: Listagem sem registros
    Dado que acesso o site não possui registros
    Quando acessar a Listagem
    Entao devo visualziar a listagem vazia

    Cenario: Listagem com um registro
    Dado que acesso o site para visualizar os registros
    Quando acessar a Listagem
    Entao devo visualziar a listagem com apenas um registro