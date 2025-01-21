// Simple JavaScript to enhance the website
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}!`);
    });
});
