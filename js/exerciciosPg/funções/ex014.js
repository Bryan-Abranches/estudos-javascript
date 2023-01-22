/* 
Continuaremos a trabalhar com a variavel i, porém agora você deve criar uma função chamada osPares, 
que  terá um loop que irá percorrer os numero de 1 a 6 e deverá imprimir a frase "O numero X é par"  
onde esse X deve ser o valor da variavel (i) caso ele seja par! Lembre-se que não precisa executar a função 
e tome cuidado com os espaços na frase solicitada. A ultima dica é que, 
o numero deve ser incluido na contagem, então, se atente aos operadores na condição do seu loop. */


function osPares(){

 
    for (let i = 1; i <= 6; i++) {
      if (i % 2 === 0) {
          
          console.log("O numero " + i + " é par")
  
  
      }
    }
  
  }

  osPares()