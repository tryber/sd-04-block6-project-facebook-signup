const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
const password = document.querySelector('#user-password');

window.onload = function () {

  btnLogin.addEventListener('click', function () {
    alert(`User: ${user.value} password: ${password.value}`);
  });
};
