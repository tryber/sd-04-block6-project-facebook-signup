const email = document.getElementById('user-email-phone');
const buttonLogin = document.getElementById('button-login');

function loginButton() {
  alert(email.value);
}

buttonLogin.addEventListener('click', loginButton);
