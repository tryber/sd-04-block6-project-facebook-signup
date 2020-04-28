
const nome = document.getElementById('campo1');
const sobrenome = document.getElementById('campo2');
const email = document.getElementById('campo3');
const senha = document.getElementById('campo4');

function validaForm() {
  if (nome.value === '') {
    alert('Nome precisa ser preenchido');
    nome.focus();
  } else if (sobrenome.value === '') {
    alert('Sobrenome precisa ser preenchido');
    sobrenome.focus();
  } else if (email.value === '') {
    alert('Email precisa ser preenchido');
    email.focus();
  } else if (senha.value === '') {
    alert('Senha precisa ser preenchido');
    senha.focus();
    return false;
  }
  return true;
}
// retorna o valor do genero
function gender() {
  const radios = document.querySelectorAll('#form-signup input[type="radio"]');
  let value;
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      value = radios[i].value;
    }
  }
  return value;
}
function showResult() {
  const name = nome.value;
  const sex = gender();
  const result = `${name} - ${sex}`;
  alert(result);
}

const btn = document.querySelector('#facebook-register');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!validaForm()) showResult();
});
