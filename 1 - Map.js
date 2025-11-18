/*
Arrays em JavaScript são listas usadas para armazenar valores dos variados tipos.
Aqui temos um exemplo de Array em JavaScript:
*/

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// saida: [ 1, 2, 3, 4, 5 ]

/*
Map consiste em percorrer um ArrayList fazendo uma determinada operação em cada um dos elemtento,
ao final retornando uma NOVA lista com esses elementos transformados.

Aqui temos um exemplo de como isso funciona:
*/

let multPorDois = numeros.map(elemento =>  elemento * 2);

console.log(multPorDois);
// saida: [ 2, 4, 6, 8, 10 ]
