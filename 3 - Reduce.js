const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// saida: [ 1, 2, 3, 4, 5 ]

let soma = numeros.reduce((elementos, acumulador) => {
    return elementos + acumulador
})

console.log(soma);
// saida: 15