// 1. Переключение темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Меняем иконку: если темная тема — солнце, если светлая — луна
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// 2. Живой поиск (фильтрация)
const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        // Если заголовок содержит текст из поиска — показываем, иначе скрываем
        if (title.includes(value)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// 3. Плавный скролл к новостям
document.getElementById('hero-btn').addEventListener('click', () => {
    document.getElementById('trends').scrollIntoView({ behavior: 'smooth' });
});
