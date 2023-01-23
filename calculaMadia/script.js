console.log("Start JS");

/* Seletores */

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const display = document.querySelector("#display"); 

console.log(numero2)
console.log(numero1)
console.log(display)

/* Botões */

const calcular = document.querySelector("#btnCalcular");
const limpar = document.querySelector("#btnLimpar");

calcular.addEventListener("click", calcMedia)


console.log(calcular)
console.log(limpar)


/* Eventos */



/* Funções */



function calcMedia(){
    let res  

    res = (numero1+numero2)/2

    display.innerText(res)

}

