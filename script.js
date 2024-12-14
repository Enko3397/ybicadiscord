// Получение элементов
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('learnMore');
const closeModalBtn = document.getElementById('closeModal');

// Открытие модального окна
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне него
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
