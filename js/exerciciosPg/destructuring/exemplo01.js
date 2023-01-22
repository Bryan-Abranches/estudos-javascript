
/* Desestruturação de Array */

let cores = ["branco","amarelo","azul","verde","vermelho"]

const [corBranco,corAmarelo , corAzul,corVerde, corVermelho] = cores

console.log (corAmarelo)

/* Desestruturação de Objetos */

let pessoa ={
    nome: "bryan",
    idade: 26,
    profissao: "supervisor",
    seriesFavoritas: ["rick e morth", "The boys", "one peace"]

}

const {nome,profissao} = pessoa // usamos chaves para desestruturar um Objeto { }

console.log(nome,profissao)


/* Uma variável pode ter seu valor atribuído via desestruturação separadamente da declaração dela.
 */


var a, b;

[a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

/* Os valores de duas variáveis podem ser trocados em uma expressão de desestruturação.
 */

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


