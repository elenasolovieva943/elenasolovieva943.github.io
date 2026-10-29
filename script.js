document.addEventListener("DOMContentLoaded", () => {

    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        document.title = `[${time}] K/DA Hub`;
    }, 1000);

    const bgBtn = document.getElementById('bg-btn');
    if (bgBtn) {
        const colors = ['#0b0714', '#1f0322', '#03141f', '#120b24'];
        let colorIndex = 0;
        bgBtn.addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
        });
    }

    const dateBtn = document.getElementById('date-btn');
    if (dateBtn) {
        dateBtn.addEventListener('click', () => {
            alert("Сегодняшняя дата: " + new Date().toLocaleDateString('ru-RU'));
        });
    }

});