const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
const btnSignin = document.querySelector('#facebook-register');
const email = document.querySelector('#email');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const senha = document.querySelector('#senha');
const data = document.querySelector('#data');
const fem = document.querySelector('#fem');
const masc = document.querySelector('#masc');
const pers = document.querySelector('#pers');


function validaInput(input) {
  if (input.value === '') {
    input.focus();
    return false;
  }
  return input.value;
}

function validaGenero() {
  if (fem.checked === true) {
    return fem.value;
  } else if (masc.checked === true) {
    return masc.value;
  } else if (pers.checked === true) {
    return pers.value;
  }
  return false;
}

function login() {
  btnLogin.addEventListener('click', function () {
    alert(user.value);
  });
}

function cadastrar() {
  btnSignin.addEventListener('click', function () {
    if (!validaInput(nome)) {
      alert('Dados Invalidos');
    } else if (!validaInput(nome)) {
      alert('Dados Invalidos');
    } else if (!validaInput(sobrenome)) {
      alert('Dados Invalidos');
    } else if (!validaInput(email)) {
      alert('Dados Invalidos');
    } else if (!validaInput(senha)) {
      alert('Dados Invalidos');
    } else if (!validaInput(data)) {
      alert('Dados Invalidos');
    } else if (!validaGenero()) {
      alert('Dados Invalidos');
    } else {
      alert(` ${nome.value} - ${sobrenome.value} - ${data.value} - ${email.value} - ${validaGenero()}`);
    }
  });
}

window.onload = function () {
  document.getElementById('data').DatePickerX.init();
  login();
  cadastrar();
};
