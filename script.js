const userInput = document.getElementById('user-email-phone');
const userPass = document.getElementById('user-password');

const loginBtn = document.getElementById('button-login');
const loginForm = document.getElementById('login-form');
loginBtn.addEventListener('click', loginHandler);
loginForm.addEventListener('submit', (e) => { e.preventDefault() });

function loginHandler() {

  alert(userInput.value);
  userInput.value = '';
  userPass.value = '';
}

const datePicker = new Pikaday({
  field: document.getElementById('date'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let sDay = day.toString();
    if (day < 10) sDay = `0${sDay}`;
    let sMonth = month.toString();
    if (month < 10) sMonth = `0${sMonth}`;


    return `${sDay}/${sMonth}/${year}`;
  }
});

const registerName = document.getElementById('name');
const registerSurname = document.getElementById('surname');
const registerEmail = document.getElementById('email');
const registerPassword = document.getElementById('password');
const registerDate = document.getElementById('date');
const registerRadioFem = document.getElementById('radioFem');
const registerRadioMas = document.getElementById('radioMas');
const registerRadioPer = document.getElementById('radioPer');

const registerBtn = document.getElementById('facebook-register');
const registerForm = document.getElementById('register-form');

registerBtn.addEventListener('click', registerHandler);
registerForm.addEventListener('submit', (e) => { e.preventDefault() });

function registerHandler() {
  if (validateForm()) {
    let genero = '';
    if (registerRadioFem.checked) genero = 'Feminino';
    if (registerRadioMas.checked) genero = 'Masculino';
    if (registerRadioPer.checked) genero = 'Personalizado';
    const response = `${registerName.value} - ${genero}`
    alert(response);
  } else {
    alert('Dados inválidos');
  }
  registerName.value = '';
  registerSurname.value = '';
  registerEmail.value = '';
  registerPassword.value = '';
  registerDate.value = '';
  registerRadioFem.checked = false;
  registerRadioMas.checked = false;
  registerRadioPer.checked = false;
}

function validateForm() {
  if (registerName.value.length < 3) return false;
  if (registerSurname.value.length < 3) return false;
  if (registerEmail.value.length < 3) return false;
  if (registerPassword.value.length < 6) return false;
  if (registerDate.value.length < 10) return false;
  if (!(registerRadioPer.checked || registerRadioFem.checked || registerRadioMas.checked)) return false;

  return true;
}
