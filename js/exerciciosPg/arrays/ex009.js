/* Exercício 9

Você deverá criar uma função chamada moverItem que irá receber 2 arrays como parâmetros e deverá 

pegar o último elemento do primeiro array e adicioná-lo como um novo elemente no segundo array. */

var arrayA = [ 1, 2, 3 ]
var arrayB = [ 4, 5 ]

function moverItem (arrayA,arrayB){

    let el = arrayA.pop()

    arrayB.push(el)
}



moverItem(arrayA, arrayB)