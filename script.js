// Получаем элементы
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Функция для открытия модального окна
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Функция для закрытия модального окна
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне области окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
