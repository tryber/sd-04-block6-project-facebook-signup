const btLogar = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');
const formResg = document.forms['resg-form'];
const btRegister = document.getElementById('facebook-register');
const regisInputs = document.querySelectorAll('input.res-data');
const radios = document.querySelectorAll('input[type=radio]');

function exibeLogin() {
  alert(email.value);
}

function mensagemRetorno(resposta) {
  let mensagem = [];
  if (resposta) {
    for (i of regisInputs) {
      mensagem.push(i.value);
    }
    for (j of radios) {
      if (j.checked) {
        mensagem.push(j.value);
      }
    }
    alert(mensagem.join(' - '));
  } else {
    alert('Dados inválidos');
  }
}

function validaResitro() {
  let valid = true;
  for (i = 0; i < regisInputs.length; i += 1) {
    if (regisInputs[i].value === '') {
      valid = false;
    }
  }
  mensagemRetorno(valid);
}

window.onload = function () {
  btLogar.onclick = exibeLogin;
  btRegister.onclick = validaResitro;
  formResg.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};
