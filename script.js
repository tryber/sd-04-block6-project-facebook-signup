
const BTNENVIAR = document.getElementById('button-login');
const USUARIO = document.getElementById('user-email-phone');
const BTNVALIDAR = document.getElementById('facebook-register');

function BtnEntrar() {
  alert(USUARIO.value);
}

function GetGenre(genre) {
  if (genre === '1') {
    return 'Femenino';
  } else if (genre === '2') {
    return 'Masculino';
  } else if (genre === '3') {
    return 'Personalizado';
  }
  return '';
}

function IsNotClear(text) {
  if (text !== '') {
    return true;
  }
  return false;

function ValidateRegistration() {
  const NAME = document.getElementById('name').value;
  const LASTNAME = document.getElementById('lastname').value;
  const PHONE = document.getElementById('phone').value;
  const PASSWORD = document.getElementById('password').value;
  const BIRTH = document.getElementById('birth').value;
  const GENRE = document.querySelector('input[name="sex"]:checked').value;

  if ((IsNotClear(NAME))) {
    let message = '';
    message = `${NAME} - ${LASTNAME} - ${PHONE} - ${PASSWORD} - ${BIRTH} - ${GetGenre(GENRE)}`;

    alert(message);
  } else {
    alert('Dados inválidos');
  }
}

BTNENVIAR.addEventListener('click', function () {
  BtnEntrar();
});

BTNVALIDAR.addEventListener('click', function () {
  ValidateRegistration();
});
