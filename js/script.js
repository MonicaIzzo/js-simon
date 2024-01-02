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
        OPERAZIONI PRELIMINARI
---------------------------------------*/


// # Recupero gli elementi dal DOM
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('numbers-list');

// # Setto variabili di comodo

const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 5;


/*---------------------------------------
    LOGICA
---------------------------------------*/

// # Genero i numeri causuali

const numbers = getUniqueRandomNumbers (min, max, totalNumbers);
console.log(numbers);

// # Li inserisco in pagina
let items = '';
for (let i = 0; i < totalNumbers; i++) {
    items += `<li>${numbers[i]}</li>`;
}

numberListElement.innerHTML = items;

// # Countdown
countdownElement.innerText = time;

const interval = setInterval(() => {
    if (time === 0) {
        clearInterval (interval);
        numberListElement.className = 'd-none';
        setTimeout (play, 200)
    } else {
        countdownElement.innerText = --time;
    }
}, 1000);

const play = () => {
    // prompt numeri utenti
    const userGuesses = getUniqueRandomNumbersFromUser(min, max, totalNumbers);
    console.log('Numeri inseriti:', userGuesses);

    const correctAnswers = [];
    for (let i = 0; i < totalNumbers; i++) {
        if (numbers.includes(userGuesses[i])) correctAnswers.push(userGuesses[i]);
    }

    alert(`Hai indovinato ${correctAnswers.length} numeri. (${correctAnswers})`)
}

pr