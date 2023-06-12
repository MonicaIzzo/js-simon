/* Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Mostriamo il countdown dei 30 secondi in pagina
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt :faccia_leggermente_sorridente:
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

console.log('JS OK')

/*---------------------------------------
        FUNZIONI
---------------------------------------*/
// # FUNZIONE PER GENRARE I NUMERI RANDOM

const getUniqueRandomNumbers = (min, max, tot) => {
    const numbers = [];

    while (numbers.lenght < tot) {
        let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    }   while (numbers.includes(randomNumber));
        numbers.push(randomNumber);
    }
   return numbers; 
} 

// # FUNZIONE PER CHIEDERE i 5 NUMERI ALL'UTENTE
const getUniqueRandomNumbersFromUser = (min, max, tot) => {
    const numbers = [];

    while (numbers.lenght < tot) {
        let userNumber;
    do {
        userNumber = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`).trim);
    }   while (isNaN(userNumber) || userNumber < min || userNumber > max);
        if (!numbers.includes(userNumber)) numbers.push(userNumber);
    }
   return numbers; 
}     

/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/


// #0
// #1
prompt('Inserisci un numero da 1 a 99!')
// #2
// #3
// #4