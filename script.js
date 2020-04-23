const btnLogin = document.getElementById('button-login');
const emailPhoneInsert = document.getElementById('user-email-phone');

btnLogin.addEventListener('click', function () {
  alert(emailPhoneInsert.value);
});
