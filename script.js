// Функция для переключения информации о вирусах
function toggleInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    infoElement.classList.toggle('active');
}

// Модальное окно
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

// Анимация появления секций при прокрутке
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
