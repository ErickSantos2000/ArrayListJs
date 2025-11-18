/*
Arrays em JavaScript são listas usadas para armazenar valores dos variados tipos.
Aqui temos um exemplo de Array em JavaScript:
*/

const clubesItalianos = ["Milan", "Inter", "Juventus"]
console.log(clubesItalianos);
// saida: [ 'Milan', 'Inter', 'Juventus' ]


/*
Map consiste em percorrer um ArrayList fazendo uma determinada operação em cada um dos elemtento,
ao final retornando uma NOVA lista com esses elementos transformados.

Aqui temos um exemplo de como isso funciona:
*/

let nomesCompostos = clubesItalianos.map((elemento) => {
    return elemento + " Futebol Clube"
})

console.log(nomesCompostos); 
/* 
saida: [
  'Milan Futebol Clube',
  'Inter Futebol Clube',
  'Juventus Futebol Clube'
]
*/
