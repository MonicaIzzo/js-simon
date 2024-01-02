/*---------------------------------------
        FUNZIONI
---------------------------------------*/
// # FUNZIONE PER GENRARE TOT NUMERI RANDOM UNICI

const getUniqueRandomNumbers = (min, max, tot) => {
    const numbers = [];

    while (numbers.length < tot) {
        let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    }   while (numbers.includes(randomNumber));
        numbers.push(randomNumber);
    }
   return numbers; 
} 

// # FUNZIONE CHE CHIEDE ALL'UTENTE TOT NUMERI
const getUniqueRandomNumbersFromUser = (min, max, tot) => {
    const numbers = [];

    while (numbers.length < tot) {
        let userNumber;
    do {
        userNumber = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`).trim());
    }   while (isNaN(userNumber) || userNumber < min || userNumber > max);
        if (!numbers.includes(userNumber)) numbers.push(userNumber);
    }
   return numbers; 
}    