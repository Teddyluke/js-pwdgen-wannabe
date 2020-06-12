

// creo un generatore di psw automatico ( poco sicuro) chiedendo dati all'utente.

// chiedo il nome all'utente

var nome = prompt("inserisci il tuo nome");

// chiedo il cognome all'utente
var cognome = prompt("inserisci il tuo cognome");
// chiedo il colore prefito all'utente
var colore = prompt("inserisci il tuo colore preferito");
// aggiungo un numero alla fine
var numero = 19;
// riproduco a schermo il risultato

document.getElementById("password").innerHTML = nome + cognome + colore + numero;
