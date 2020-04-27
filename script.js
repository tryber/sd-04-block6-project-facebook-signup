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
    alert('Dados Invalidos');
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
  return false;
}

window.onload = function () {
  document.getElementById('data').DatePickerX.init();
  btnLogin.addEventListener('click', function () {
    alert(`${user.value}`);
  });

  btnSignin.addEventListener('click', function () {
    if (!validaInput(nome)) {
      return false;
    } else if (!validaInput(nome)) {
      return false;
    } else if (!validaInput(sobrenome)) {
      return false;
    } else if (!validaInput(email)) {
      return false;
    } else if (!validaInput(senha)) {
      return false;
    } else if (!validaInput(data)) {
      return false;
    } else if (!validaGenero()) {
      alert('Dados Invalidos');
      return false;
    }
    alert(` ${nome.value} - ${sobrenome.value} - ${data.value} - ${email.value} - ${validaGenero()}`);
  });
};
