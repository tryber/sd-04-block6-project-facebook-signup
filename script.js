function cadastro () {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const celMail = document.getElementById('celularMail').value;
    const senha = document.getElementById('senha').value;
    const data = document.getElementById('escolhe-data').value;
  
if (nome.length && sobrenome.length && celMail.length && senha.length && escolhe-data.length) {
    window.alert(`${nome} ${sobrenome} - ${celMail} - ${escolhe-data}`);
} 
else {
    window.alert('Dados inválidos.');
    }
}

function LOADED () {
    const submitForms = document.getElementById('facebook-register');
    submitForms.addEventListener('click', cadastro);
}
  
window.onload = LOADED();