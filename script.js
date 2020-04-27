let i;
const inpEmailTel = document.getElementById('user-email-phone');
const butLogin = document.getElementById('button-login');
const form = document.querySelector('form');
const radio = document.querySelectorAll('input[type="radio"]');

butLogin.addEventListener('click', function () {
  alert(inpEmailTel.value);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form[0].value;
  const lastName = form[1].value;
  const celEmail = form[2].value;
  const date = form[4].value;
  let radioCheck;

  for (i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      radioCheck = radio[i].value;
    }
  }

  alert(`${name} ${lastName} - ${celEmail} - ${date} - ${radioCheck}`);
});
