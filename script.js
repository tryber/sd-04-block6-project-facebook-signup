const submitBtn = document.querySelector('.facebook-register');

function resetBorderColor(element) {
  element.addEventListener('input', () => {
    element.style.borderColor = '#bdc7d8';
  });
}

function checkFirstName() {
  const firstName = document.querySelector('.name');

  if (firstName.value.trim() === '') {
    firstName.style.borderColor = 'red';

    resetBorderColor(firstName);

    return false;
  }

  return true;
}

function checkLastName() {
  const lastName = document.querySelector('.last-name');

  if (lastName.value.trim() === '') {
    lastName.style.borderColor = 'red';

    resetBorderColor(lastName);

    return false;
  }

  return true;
}

function checkPhoneEmail() {
  const phoneEmail = document.querySelector('.phone-email');

  if (phoneEmail.value.trim() === '') {
    phoneEmail.style.borderColor = 'red';

    resetBorderColor(phoneEmail);

    return false;
  }

  return true;
}

function checkPassword() {
  const password = document.querySelector('.password');

  if (password.value.trim() === '') {
    password.style.borderColor = 'red';

    resetBorderColor(password);

    return false;
  }

  return true;
}

function checkBirthDate() {
  const datepicker = document.querySelector('.datepicker');

  if (datepicker.value.trim() === '') {
    datepicker.style.borderColor = 'red';

    resetBorderColor(datepicker);

    return false;
  }

  return true;
}

function checkGender() {
  const gender = document.querySelectorAll('.gender-radio');

  const itemArray = [];

  gender.forEach((item) => {
    itemArray.push(item);

    if (!(item.checked)) {
      item.classList.add('invalid-gender');

      item.addEventListener('input', () => {
        gender.forEach((item2) => {
          item2.classList.remove('invalid-gender');
        });
      });

      return false;
    }

    return undefined;
  });

  itemArray.every((arrayItem) => {
    if (arrayItem.checked) {
      gender.forEach((item) => {
        item.classList.remove('invalid-gender');
      });
    }

    return undefined;
  });

  return true;
}

function checkInputs(event) {
  event.preventDefault();

  const firstName = checkFirstName();
  const lastName = checkLastName();
  const password = checkPassword();
  const phoneEmail = checkPhoneEmail();
  const birthDate = checkBirthDate();
  const gender = checkGender();

  const inputs = [firstName, lastName, password, phoneEmail, birthDate, gender];

  inputs.every((item) => {
    if (item === false) return alert('Cheque os campos em vermelho e insira dados válidos.');

    return undefined;
  });
}

submitBtn.addEventListener('click', checkInputs);
