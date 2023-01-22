/* Exercício 4

Uma agência de carros quer exibir os itens do seu catálogo para os clientes. Eles exportaram os nomes dos carros 

no formato de array e guardamos essas informações na variável listaDeCarros que já vai estar disponível no código. 

Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador. 

Use o console.log para exibir o nome dos carro de acordo com o exemplo abaixo:

“Nome do Carro: NOME_DO_CARRO” */

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

// Seu loop aqui:

for(let i=0;i<listaDeCarros.length;i++){
    console.log("Nome do carro: " + listaDeCarros[i])


}