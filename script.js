const email = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');


//mostrar email ao clicar no botão
login.addEventListener('click', function showEmail() {
    alert(email.value);
});
