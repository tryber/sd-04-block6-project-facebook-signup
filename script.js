
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

function ValidateRegistration() {
  const NAME = document.getElementById('name').value;
  const LASTNAME = document.getElementById('lastname').value;
  const PHONE = document.getElementById('phone').value;
  const PASSWORD = document.getElementById('password').value;
  const BIRTH = document.getElementById('birth').value;
  const GENRE = document.querySelector('input[name="sex"]:checked');

  if (IsNotClear(NAME)) {
    let message = '';
    message = `${NAME} - ${LASTNAME} - ${PHONE} - ${PASSWORD} - ${BIRTH} - ${GetGenre(GENRE.value)}`;

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
