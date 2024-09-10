// Generujemy losową liczbę od 1 do 100
const liczbaDoZgadniecia = Math.floor(Math.random() * 100) + 1;

let proby = 0;
let zgadniete = false;

while (!zgadniete) {
  // Pytamy gracza o liczbę
  let strzal = prompt("Zgadnij liczbę od 1 do 100:");
  
  // Konwertujemy input na liczbę
  strzal = Number(strzal);
  
  // Zwiększamy licznik prób
  proby++;
  
  // Sprawdzamy, czy gracz zgadł
  if (strzal === liczbaDoZgadniecia) {
    alert(`Gratulacje! Zgadłeś liczbę ${liczbaDoZgadniecia} w ${proby} próbach.`);
    zgadniete = true;
  } else if (strzal < liczbaDoZgadniecia) {
    alert("Za mało! Spróbuj ponownie.");
  } else {
    alert("Za dużo! Spróbuj ponownie.");
  }
}