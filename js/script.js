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
const form = document.getElementById('solutions-from');
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const scoreElements = document.getElementById('score');

// # Setto variabili di comodo

const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 5;
scoreElements.innerHTML = '';


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
        form.classList.remove('d-none');
    } else {
        countdownElement.innerText = --time;
    }
}, 1000);


// # Metto in ascolto il form
form.addEventListener('submit', e => {
    // Blocco il form
    e.preventDefault();

    // Recuperare i valori
    const userGuesses = [];
    
    for (let i = 0; i < inputs.length; i++) {
    const value = parseInt(inputs[i].value);
    if(!isNaN(value) && value >= min && value <= max && !userGuesses.includes(value)) {
        userGuesses.push(value);
    }
}
// validazione
if (userGuesses.length !== totalNumbers) {
    alert('Sono stati inseriti valori non validi')
    return
}
 const correctAnswers = [];
    for (let i = 0; i < totalNumbers; i++) {
        if (numbers.includes(userGuesses[i])) correctAnswers.push(userGuesses[i]);
    }

    scoreElements.innerHTML = `Hai indovinato <strong>${correctAnswers.length}</strong> numero/i. (${correctAnswers})`;
})