let btnLogin = document.querySelector('#button-login');
let user = document.querySelector('#user-email-phone');
let password = document.querySelector('#senha');

btnLogin.addEventListener('click', function () {
  alert(`User: ${ user.value } password: ${ password.value }`)
});
