function somasDosPares(numero) {
  let soma = 0;

  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      soma = soma + i;
    }
  }
  return soma;
}

console.log(somasDosPares(6));
