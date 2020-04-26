function cadastro() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const celMail = document.getElementById('celularMail').value;
  const senha = document.getElementById('senha').value;
  const data = document.getElementById('data').value;
  if (nome.length && sobrenome.length && celMail.length && senha.length && data.length) {
    window.alert(`${nome}${sobrenome}-${celMail}-${data}`);
  } else {
    window.alert('Dados inválidos.');
}
  }

function LOADED() {
  const submitForms = document.getElementById('facebook-register');
  submitForms.addEventListener('click', cadastro);
}

window.onload = LOADED();
