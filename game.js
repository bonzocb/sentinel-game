// Zmienna przechowująca wynik
let score = 0;

// Funkcja, która dodaje nową kaczkę do gry
function spawnDuck() {
    // Tworzymy element div dla kaczki
    const duck = document.createElement('div');
    duck.classList.add('duck');

    // Losowe pozycje dla kaczki (aby latała po całym ekranie)
    const randomX = Math.floor(Math.random() * window.innerWidth - 100); // szerokość ekranu
    const randomY = Math.floor(Math.random() * window.innerHeight - 100); // wysokość ekranu

    // Ustawiamy pozycję kaczki
    duck.style.left = randomX + 'px';
    duck.style.top = randomY + 'px';

    // Dodajemy kaczkę do ciała dokumentu
    document.body.appendChild(duck);

    // Dodajemy event, który sprawia, że kliknięcie na kaczkę powoduje jej zniknięcie
    duck.addEventListener('click', () => {
        // Zwiększamy wynik
        score++;
        document.getElementById('score').textContent = score;

        // Usuwamy kaczkę z ekranu
        duck.style.transform = 'scale(0)';
        setTimeout(() => {
            duck.remove();
        }, 300);
    });

    // Co jakiś czas nowa kaczka
    setTimeout(() => {
        if (duck.parentElement) {
            duck.remove();
        }
    }, 3000); // Kaczka zniknie po 3 sekundach, jeśli nie została kliknięta
}

// Uruchamiamy funkcję spawnDuck co 1 sekundę
setInterval(spawnDuck, 1000);
