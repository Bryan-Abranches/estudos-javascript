/* Exercício 10

Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)

Essa função deve receber dois parâmetros:

O primeiro deve representar o nome de um aluno

O segundo deve representar um array com o os nomes dos alunos presentes.

A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. 

false caso contrário. */

var nomesDosPresentes = ["bryan","kevin","joao"];
var nomeDoAluno = "kevin";

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    let presente = false

  for (let i = 0; i <= nomesDosPresentes.length; i++) {
   
    if (nomesDosPresentes[i] === nomeDoAluno) {
      return presente = true;
    } 
  }

  return presente;
}

console.log(estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes));
