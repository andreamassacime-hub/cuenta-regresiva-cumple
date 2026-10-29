document.addEventListener('DOMContentLoaded', () => {
    // Fecha objetivo: 1 de Noviembre de 2026 a las 8:00 PM (20:00:00)
    const targetDate = new Date(2026, 10, 1, 20, 0, 0).getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const countdownState = document.getElementById('countdownState');
    const birthdayState = document.getElementById('birthdayState');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        // Si ya llegó la fecha objetivo
        if (difference <= 0) {
            countdownState.classList.add('hidden');
            birthdayState.classList.remove('hidden');
            return;
        }

        // Cálculo de días, horas, minutos y segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Formato con cero inicial si es menor a 10
        daysEl.textContent = days < 10 ? '0' + days : days;
        hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Actualiza el contador cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});