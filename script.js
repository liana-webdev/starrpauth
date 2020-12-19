// Кнопки для смены между формами
const btnLogin = document.querySelectorAll('.btn-login');
const btnRecovery = document.querySelectorAll('.btn-recovery');
const btnRego = document.querySelectorAll('.btn-rego');

// Кнопки для отправки формы
const btnSignIn = document.querySelector('.btn-signin');
const btnRegister = document.querySelector('.btn-signup');
const btnRecover = document.querySelector('.btn-recover');

// Формы
const regoForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const recoveryForm = document.getElementById('recoveryForm');

// Другое
const formTitle = document.getElementById('form-title');
const trevor = document.querySelector('.trevor');
const girl = document.querySelector('.girl');
const root = document.documentElement;

root.addEventListener('mousemove', (e) => {
  x = e.clientX;
  y = e.clientY;
  trevor.style.transform = `translate(${x / 20}px,${y / 40}px)`;
  girl.style.transform = `translate(${-x / 20}px,${-y / 40}px)`;
});

for (let i = 0; i < btnRecovery.length; i++)
  btnRecovery[i].onclick = (e) => {
    e.preventDefault();
    console.log('Recovery');
    loginForm.style.display = 'none';
    regoForm.style.display = 'none';
    recoveryForm.style.display = 'block';
    formTitle.textContent = 'Сброс';
  };

for (let i = 0; i < btnRego.length; i++)
  btnRego[i].onclick = (e) => {
    e.preventDefault();
    console.log('Registration');
    regoForm.style.display = 'block';
    loginForm.style.display = 'none';
    recoveryForm.style.display = 'none';
    formTitle.textContent = 'Регистрация';
  };

for (let i = 0; i < btnLogin.length; i++)
  btnLogin[i].onclick = (e) => {
    e.preventDefault();
    console.log('Login');
    regoForm.style.display = 'none';
    recoveryForm.style.display = 'none';
    loginForm.style.display = 'block';
    formTitle.textContent = 'Авторизация';
  };
console.log(btnRegister);
