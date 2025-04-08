/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = "Mario";

// Dichiara la funzione qui.
const getGreeting = () => {
  const today = new Date();
  const time = today.getHours();

  let now = time <= 13 ? "Buongiorno" : time <= 17 ? "Buon pomeriggio" : "Buonasera";

  return now;
};

// Invoca la funzione qui e stampa il risultato in console
alert(`${getGreeting()} ${userName}`);
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
