
function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');// pega a string com a data de nascimento e aplisca o split no / traformando em um array 
    const d = new Date();// para que serve ? variavel que vai retornar a data de hoje 2022-12-29T21:01:44.959Z
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();

    ano = + ano; mes = + mes; dia = + dia;


    
    let quantosAnos = anoAtual - ano;
    
   

    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    } 
    

    
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  

var idade = calcularIdade('05/04/1996')
var censura = 18

console.log(idade)


function deixaEntrar(idade,censura){
   
    if (idade >= censura) {
        
        
        return console.log (true);
    
    }
   
    else {
        
        return console.log(false)


    }
    


}


console.log(deixaEntrar(idade,censura))


