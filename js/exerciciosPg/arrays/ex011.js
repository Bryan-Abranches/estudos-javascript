/* Exercício 11

Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. 

Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras. 

Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro. */

var arrayPalavras = ["bryan", "kevin", "joao"];
var arrayM = [];

function transformaParaMaiusculo(palavras) {
  let res;

  for (let i = 0; i < palavras.length; i++) {
    res = palavras[i].toUpperCase();

    arrayM.push(res);
  }

  return res;
}

transformaParaMaiusculo(arrayPalavras);
console.log(arrayM)
