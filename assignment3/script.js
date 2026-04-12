const form = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  phoneError.textContent = '';
  successMessage.textContent = '';

  if (!nameInput.value.trim()) {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (!validatePhone(phoneInput.value)) {
    phoneError.textContent = 'Enter a 10-digit phone number.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
const studentForm = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const rollInput = document.getElementById('roll');
const successMessage = document.getElementById('successMessage');

const errors = {
  name: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  phone: document.getElementById('phoneError'),
  roll: document.getElementById('rollError'),
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  successMessage.textContent = '';

  if (nameInput.value.trim() === '') {
    errors.name.textContent = 'Name is required.';
    valid = false;
  } else {
    errors.name.textContent = '';
  }

  if (!validateEmail(emailInput.value.trim())) {
    errors.email.textContent = 'Enter a valid email address.';
    valid = false;
  } else {
    errors.email.textContent = '';
  }

  if (!validatePhone(phoneInput.value.trim())) {
    errors.phone.textContent = 'Enter a 10-digit phone number.';
    valid = false;
  } else {
    errors.phone.textContent = '';
  }

  if (rollInput.value.trim() === '') {
    errors.roll.textContent = 'Roll number is required.';
    valid = false;
  } else {
    errors.roll.textContent = '';
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    studentForm.reset();
  }
});
