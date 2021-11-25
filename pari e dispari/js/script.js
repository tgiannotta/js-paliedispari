// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const sceltaUtente = prompt('Scegli pari o dispari');
const numUtente = parseInt( prompt('Inserisci un numero tra 1 e 5') );

const numCom = getRndInteger(1, 5);

const somma = numUtente + numCom;
console.log(somma);

const sommaPariDispari = pariodispari(somma);
console.log(sommaPariDispari);

if(sceltaUtente === sommaPariDispari ) {
    alert('Hai vinto');
} else {
    alert('Hai perso');
}

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Check se pari o dispari
function pariodispari(number) {
    let result;
    if( number % 2 === 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}