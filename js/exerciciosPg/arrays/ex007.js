/* Exercício 7

Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou, 

e nosso trabalho é ajudá-los a criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.

Com base no array acima, que está disponível no código, 

faça um loop que verifique quantos meses tiveram valores negativos e armazene a contagem uma variável 

chamada totalNegativos que também está disponível no código. */

var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

for (let i =0; i < listaDeGanhos.length; i++){
    
    if (listaDeGanhos[i]< 0){
        
        totalNegativos++
    }

}

console.log(totalNegativos)