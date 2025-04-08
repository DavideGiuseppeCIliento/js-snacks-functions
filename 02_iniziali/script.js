/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const newArray = (elementsArray) => {
  const initialsArray = [];
  for (let i = 0; i < elementsArray.length; i++) {
    const currentName = elementsArray[i];
    initialsArray.push(currentName[0]);
  }
  return initialsArray;
};

// Invoca la funzione qui e stampa il risultato in console
const x = newArray(names);
alert(x);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
