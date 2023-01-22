
const array = [1, 2, 3,4,5,6];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

console.log(obj)

/* Para arrays típicos, todos os índices são propriedades próprias enumeráveis, 

então os arrays podem ser espalhados em objetos. */