const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
// const password = document.querySelector('#user-password');
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
    alert('Não deixe o campo vazio!');
    input.focus();
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
  return true;
}

function validaEmail() {
  if (email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    alert('Digite um email valido! não esqueça do @ e .');
    email.focus();
  }
  return true;
}

window.onload = function () {
  document.getElementById('data').DatePickerX.init();

  btnLogin.addEventListener('click', function () {
    alert(`${user.value}`);
  });

  btnSignin.addEventListener('click', function () {
    validaInput(nome);
    validaInput(sobrenome);
    validaInput(senha);
    validaInput(data);
    validaEmail();
    validaGenero();
  });
};
