const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
const password = document.querySelector('#senha');

btnLogin.addEventListener('click', function () {
  alert(`User: ${user.value} password: ${password.value}`);
});
