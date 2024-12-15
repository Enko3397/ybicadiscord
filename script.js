function toggleDetails(virusName) {
    const details = document.getElementById(virusName);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Анимация появления элементов
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.add("fade-in");
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.remove("hidden");
            }
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
