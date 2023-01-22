/* Exercício 5

Um mercado tem uma lista de produtos, que eles querem exibir para todo novo cliente que chegar! 

Como o processo é um pouco trabalhoso e repetitivo eles precisam do seu conhecimento em funções para ajudá-los.

Eles já tem um código, porém toda vez eles precisam reescrever o código para exibir ao cliente:

Seu trabalho é melhorar esse código, para ficar mais simples utilizá-lo. 

Precisamos que você transforme o código acima em uma função chamada listarProdutos. */




function listarProdutos(){
    let lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']

    for(var i = 0; i < lista.length; i++){
        console.log(lista[i])
    }

}


listarProdutos()

