// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('Digita una parola: ');

let palindroma = controllo(parola);

function controllo(stringa) {
    let palindroma = [''];

    for (let i = stringa.length - 1; i >= 0; i--) {
        palindroma += stringa[i];
    }
    if (palindroma === parola) {
        alert('La parola digitata è Palindroma');
    } else {
        alert('La parola digitata non è Palindroma');
    }

    return palindroma;
}