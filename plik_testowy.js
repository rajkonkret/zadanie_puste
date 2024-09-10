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
        swietujWygrana();
    } else if (strzal < liczbaDoZgadniecia) {
        wynikElement.textContent = "Za mało! Spróbuj ponownie.";
    } else {
        wynikElement.textContent = "Za dużo! Spróbuj ponownie.";
    }

    probyElement.textContent = `Liczba prób: ${proby}`;
}

function swietujWygrana() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);
}