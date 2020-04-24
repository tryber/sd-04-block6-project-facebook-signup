// ********************* Declaração de variaveis **********************************************
const entrarButton = document.getElementById('button-login');

// ************************ Funções ************************************************
function userAlert() {
  const emailNumero = document.getElementById('user-email-phone').value;
  alert(emailNumero);
}

window.onload = function () {
  entrarButton.addEventListener('click', function () {
    userAlert();
  });
};
