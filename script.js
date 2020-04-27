const btnEntrar = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');

function AlertEmailPhone() {
  if (emailInput.value !== '') {
    alert(`${emailInput.value}`);
  } else {
    alert('Email ou Telefone inválidos');
  }
}

btnEntrar.addEventListener('click', AlertEmailPhone);
