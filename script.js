// --- 1. Сяйво за курсором ---
const glow = document.createElement('div');
glow.className = 'glow-cursor';
document.body.prepend(glow);
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// --- 2. Тема з пам'яттю ---
const themeBtn = document.getElementById('theme-toggle');
const updateThemeUI = (isDark) => {
    document.body.classList.toggle('dark-theme', isDark);
    themeBtn.textContent = isDark ? '☀️' : '🌙';
};

if (localStorage.getItem('theme') === 'dark') updateThemeUI(true);

themeBtn.onclick = () => {
    const isDark = !document.body.classList.contains('dark-theme');
    updateThemeUI(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// --- 3. Пошук ---
document.getElementById('search-input').oninput = (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(val) ? 'flex' : 'none';
    });
};

// --- 4. Модальні вікна ---
function initModals() {
    document.querySelectorAll('.card-btn').forEach(btn => {
        btn.onclick = () => {
            const title = btn.closest('.card-content').querySelector('h3').textContent;
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>${title}</h2>
                    <p style="margin: 20px 0;">Стаття про <b>${title}</b> готується до публікації. Залишайтеся з нами!</p>
                    <button class="main-btn close-btn">Зрозуміло</button>
                </div>`;
            document.body.appendChild(modal);
            modal.querySelector('.close-btn').onclick = () => modal.remove();
            modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
        };
    });
}
initModals();

// --- 5. Завантаження ще ---
document.getElementById('load-more').onclick = function() {
    const container = document.getElementById('cards-container');
    const newCard = document.createElement('article');
    newCard.className = 'card';
    newCard.innerHTML = `
        <div class="card-img"><img src="https://web-academy.ua/blog/wp-content/uploads/2022/08/web-3-0.jpg" alt="Web3"></div>
        <div class="card-content">
            <h3>Майбутнє Web 3.0</h3>
            <p>Як децентралізація змінить наше уявлення про приватність та цифровий світ.</p>
            <button class="card-btn">Читати далі</button>
        </div>`;
    container.appendChild(newCard);
    initModals(); // Активуємо кнопку на новій картці
    this.style.display = 'none'; // Ховаємо кнопку після використання
};

// --- 6. Підписка ---
document.getElementById('subscribe-form').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('sub-email').value;
    this.innerHTML = `<div class="success-msg">🚀 Готово! Лист відправлено на ${email}</div>`;
};

// --- 7. Плавний скрол кнопки Hero ---
document.getElementById('hero-btn').onclick = () => {
    document.getElementById('trends').scrollIntoView({ behavior: 'smooth' });
};
