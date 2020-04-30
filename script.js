const entryButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');
const signFName = document.getElementById('fname');
const signLName = document.getElementById('lname');
const signEmail = document.getElementById('emailInput');
const signPass = document.getElementById('passInput');
const namePattern = /^[a-zA-Z]+$/;
const emailPattern = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const newDiv = document.createElement('div');
const submitButton = document.getElementById('facebook-register');

entryButton.addEventListener('click', function () {
  alert(emailInput.value);
});


function validateInputs(param1, param2) {
  param1.classList.remove('warning');
  if (param1.value.match(param2)) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = param1.value;
    newDiv.appendChild(paragraph);
  } else {
    param1.classList.add('warning');
    param1.value = '';
  }
}
signFName.addEventListener('change', function () {
  validateInputs(signFName, namePattern);
});
signLName.addEventListener('change', function () {
  validateInputs(signLName, namePattern);
});
signEmail.addEventListener('change', function () {
  validateInputs(signEmail, emailPattern);
});
signPass.addEventListener('change', function () {
  validateInputs(signPass, passPattern);
});

let formArray = [];
function getData() {
  const inputs = document.querySelectorAll('input');
  for (let i = 2; i <= 6; i += 1) {
    formArray.push(inputs[i].value);
  }
  return formArray;
}

function getRadioData() {
  const inputs = document.querySelectorAll('input');
  for (let i = 7; i <= 9; i += 1) {
    if (inputs[i].checked) formArray.push(inputs[i].title);
  }
  return formArray;
}
let validate = false;
function validateData() {
  for (let i = 0; i <= formArray.length; i += 1) {
    if (formArray[i] === '') {
      validate = false;
      break;
    } else validate = true;
  }
  return validate;
}

function alertData() {
  if (validate) alert(formArray);
  else alert('Dados inválidos.');
}

submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  formArray = [];
  getData();
  getRadioData();
  validateData();
  alertData();
});
