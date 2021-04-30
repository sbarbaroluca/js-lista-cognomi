 
// 1. Chiedi all'utente il cognome
// 2. Inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. Stampa la lista ordinata alfabeticamente
// 4. Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 
// 1 Creare una la lista dei cognomi
var listaCognomi = ["Bianche", "Neri", "Rossi", "Verdi", "Gialli"]
console.log("Lista iniziale:", listaCognomi);
document.getElementById("surname").innerHTML = listaCognomi;

// 2 Chiedere all'utente il cognome ed inserirlo nella lista
listaCognomi.push(prompt("Scrivi il tuo cognome"));
console.log("Lista dopo l'aggiunta:", listaCognomi);
document.getElementById("surname-add").innerHTML = listaCognomi;

//3 Stampa della lista dei cognomi in ordine alfabetico
