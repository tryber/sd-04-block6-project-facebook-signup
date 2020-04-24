const inpEmailTel = document.getElementById('user-email-phone');
const butLogin = document.getElementById('button-login');
const picker = new Pikaday({ field: document.getElementById('datepicker') });

butLogin.addEventListener('click', function () {
  alert(inpEmailTel.value);
});
