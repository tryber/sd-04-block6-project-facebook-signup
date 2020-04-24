const inpEmailTel = document.getElementById('user-email-phone');
const butLogin = document.getElementById('button-login');

butLogin.addEventListener('click', function () {
  alert(inpEmailTel.value);
});
