const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
const password = document.querySelector('#senha');
const slctDia = document.querySelector('#dia');
const slctMes = document.querySelector('#mes');
const slctAno = document.querySelector('#ano');

window.onload = function () {
  document.getElementById('data').DatePickerX.init( 
  );

  btnLogin.addEventListener('click', function () {
    alert(`User: ${user.value} password: ${password.value}`);
  });
}
