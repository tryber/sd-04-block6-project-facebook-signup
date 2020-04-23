
const BTNENVIAR = document.getElementById('button-login');
const USUARIO = document.getElementById('user-email-phone');

function BtnEntrar() {
  alert(USUARIO.value);
}

BTNENVIAR.addEventListener('click', function () {
  BtnEntrar();
  });
