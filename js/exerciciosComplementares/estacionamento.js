

let placas = [
  "FCB2I13",
  "AGS1F26",
  "AGS1F27",
  "AGS1F28",
  "AGS1F28",
  "AGS1F28",
  "AGS1F28",
  "FSV3IEE",
  "AGS1F28"

];
// placa do carro

var carro = "AGS1F28";

 function calcularNumeroDeEntradas(placa) {
  
    let entrada = 0;

  for (let i = 0; i <= placas.length; i++) {
    
    if (placa === placas[i]) {
      
        entrada = entrada + 1;
    }

    return entrada;
  
  }
}
 
function calcularValorDevido(entrada){

    if(entrada <= 20){
      
        let resultado = entrada*10 
        console.log(resultado)
    } else if ( entrada > 20){
        let resultado = entrada*5
        console.log(resultado)

    }
}

console.log(calcularValorDevido(calcularNumeroDeEntradas(carro)))








