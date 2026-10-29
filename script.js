document.addEventListener('DOMContentLoaded', () => {
    const countdownState = document.getElementById('countdownState');
    const birthdayState = document.getElementById('birthdayState');

    // Forzamos a que se muestre la pantalla del gatito para probar
    countdownState.classList.add('hidden');
    birthdayState.classList.remove('hidden');
});