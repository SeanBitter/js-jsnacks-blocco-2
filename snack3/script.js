/*
Crea un array di numeri interi e fai la somma di tutti gli elementi
che sono in posizione (indice) dispari
*/

// creo l'array con numeri casuali
const numbers = [5, 6, 90, 27, 2, 11, 1, 34]

// imposto un valore 0 alla somma che andrò a fare successivamente
let sum = 0;

// eseguo un ciclo dell'array, per trovare gli elementi in posizione
// dispari e li sommo tra di loro

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
        
        sum += numbers[i];
    }
}

console.log(sum);