
const BTNENVIAR = document.getElementById('button-login');
const USUARIO = document.getElementById('user-email-phone');
const BTNVALIDAR = document.getElementById('facebook-register');

function BtnEntrar() {
  alert(USUARIO.value);
}

function GetGenre(genre) {
  let result = '';
  if (genre === '1') {
    result = 'Feminino';
  } else if (genre === '2') {
    result = 'Masculino';
  } else if (genre === '3') {
    result = 'Personalizado';
  }
  return result;
}

function IsNotClear(text) {
  let result = false;
  if (text !== '') {
    result = true;
  }
  return result;
}

function IsNotNull(text) {
  let result = false;
  if (text !== null) {
    result = IsNotClear(text.value);
  }
  return result;
}

BTNENVIAR.addEventListener('click', function () {
  BtnEntrar();
});

BTNVALIDAR.addEventListener('click', function () {
  ValidateRegistration();
});
