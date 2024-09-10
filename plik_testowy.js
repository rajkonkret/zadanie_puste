const liczbaDoZgadniecia = Math.floor(Math.random() * 100) + 1;
let proby = 0;

function sprawdzStrzal() {
    const strzal = parseInt(document.getElementById('guess').value);
    proby++;

    const wynikElement = document.getElementById('wynik');
    const probyElement = document.getElementById('proby');

    if (strzal === liczbaDoZgadniecia) {
        wynikElement.textContent = `Gratulacje! Zgadłeś liczbę ${liczbaDoZgadniecia}!`;
        probyElement.textContent = `Liczba prób: ${proby}`;
        document.querySelector('button').disabled = true;
    } else if (strzal < liczbaDoZgadniecia) {
        wynikElement.textContent = "Za mało! Spróbuj ponownie.";
    } else {
        wynikElement.textContent = "Za dużo! Spróbuj ponownie.";
    }

    probyElement.textContent = `Liczba prób: ${proby}`;
}