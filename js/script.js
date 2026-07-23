const openBtn = document.getElementById('menu-open-button');
const closeBtn = document.getElementById('menu-close-button');
const navMenu = document.getElementById('nav-menu');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
});

const passwordInput = document.getElementById('password');
const passwordToggle = document.querySelector('.password-toggle');

if (passwordInput && passwordToggle) {
    passwordToggle.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        passwordToggle.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        passwordToggle.innerHTML = `<i class="fa-regular fa-eye${isPassword ? '-slash' : ''}" aria-hidden="true"></i>`;
    });
}
