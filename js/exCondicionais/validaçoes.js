/* Neste exercício te damos uma variável chamada linguagem, que tem uma String atribuída. Seu trabalho 
agora é construir uma condicional if / else para que, se a variável contém "javascript"
 imprima no console o texto "Estou aprendendo", se não imprima"Vou aprender mais pra frente"      */

let linguagem = "javascript";
let linguagem1 = "cebola";

if (linguagem == "javascript") {
  console.log("Estou aprendendo");
} else {
  console.log("Vou aprender mais pra frente");
}

if (linguagem1 == "javascript") {
  console.log("Estou aprendendo");
} else {
  console.log("Vou aprender mais pra frente");
}

/* 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles. */

/* /* let valor1 = 50;
let valor2 = 20; 



if (valor1 > valor2) {
  console.log(`O valor de ${valor1} e maior que o valor de ${valor2}`);
} else {
  console.log(`O valor de ${valor2} e maior que o valor de ${valor1}`);
}


*/

/*   2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
    escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	

   (não	é	necessário	considerar	o	mês	em	que	ela	nasceu). */

let anoNascimento = 1996;
let anoAtual = 2022;

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log(`Voce ja tem ${idade} anos e ja pode votar, Faz o L}`);
} else {
  console.log(`Voce ainda tem ${idade} anos e nao pode votar, guri!}`);
}

/* 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
seguintes	mensagens:	
ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
ACESSO	NEGADO	caso	a	senha	seja	inválida. */

let usuario = "bryan@mail.com";
let senha = 1234;

if (usuario == "bryan@mail.com" && senha == 1234) {
  console.log("ACESSO	PERMITIDO");
} else {
  console.log("ACESSO	NEGADO");
}

/* 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
valor	total	da	compra. */

let quantidadeCompra = 2;
let valorMaca = "";

if (quantidadeCompra < 7) {
  valorMaca = 0.3;

  let resulado = valorMaca * quantidadeCompra;

  console.log(
    `voce esta comprando ${quantidadeCompra} de maça ficou ${valorMaca} cada, o senhor me deve ${resulado} conto!`
  );
} else if (quantidadeCompra >= 7) {
  valorMaca = 0.25;

  let resulado = valorMaca * quantidadeCompra;

  console.log(
    `voce esta comprando ${quantidadeCompra} de maça ficou ${valorMaca} cada, o senhor me deve ${resulado} conto!`
  );
}

/* Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente. */

let valor1 = 1;
let valor2 = 3;
let valor3 = 22;

if (valor1 > valor2 && valor1 > valor3 && valor2 < valor3) {
  console.log(
    `o seguencia do maior para o menor e ${valor1}, ${valor2}, ${valor3} $`
  );
}

/* 6. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes */

let masculino = true;
let alturaMasc = 1.78;

let alturaFeme = 1.67;

if (masculino == true) {
  let resultado = alturaMasc * 72.7 - 58;

  console.log(`O seu peso ideal e ${resultado}`);
} else {
  let resultado = alturaFeme * 62.1 - 44.7;

  console.log(`O seu peso ideal e ${resultado}`);
}

/* Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
− Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
área
− Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
sua	área.	
− Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO. */

/* Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
 */

let nota1 = 10;
let nota2 = 10;

let media = (nota1 + nota2) / 2;

if (media >= 7 && media<10) {
  console.log("Aprovado" + media);
} else if (media =10) {
  console.log("APROVADOOOOOOOOOOOOOOOOOOOO");
} else {
  console.log("reprovado");
}

console.log(media(10,10))

function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

    var media = (nota1 + nota2)/2 ;

    if(media >= 7)
     if(media==10)
      alert("Uau! Aprovado com distin��o");
     else
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Reprovado!")

}

