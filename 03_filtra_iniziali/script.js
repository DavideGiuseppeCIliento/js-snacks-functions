/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const char = prompt("Inserisci una lettera").toLowerCase();

// Dichiara la funzione qui.
const newArray = (elementsArray, char) => {
  const initialsArray = [];
  for (let i = 0; i < elementsArray.length; i++) {
    const currentName = elementsArray[i].toLowerCase();
    if (currentName[0] === char) initialsArray.push(currentName);
  }
  return initialsArray;
};
// Invoca la funzione qui e stampa il risultato in console
const x = newArray(names, char);
alert(x);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
