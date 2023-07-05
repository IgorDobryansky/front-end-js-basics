import "./style.scss";

const app = document.querySelector("#app");

const form = document.createElement("form");

app.append(form);

const inputWrapper = document.createElement("div");
inputWrapper.className = "input-wrapper";

const nameInput = document.createElement("input");
nameInput.id = "name-input";
nameInput.name = "nameInput";
const nameInputLabel = document.createElement("label");
nameInputLabel.htmlFor = "name-input";
nameInputLabel.textContent = "Name";
const nameErrorSpan = document.createElement("span");
const nameInputWrapper = inputWrapper.cloneNode(true);
nameInputWrapper.append(nameInputLabel, nameInput, nameErrorSpan);

const emailInput = document.createElement("input");
emailInput.id = "email-input";
emailInput.name = "emailInput";
const emailInputLabel = document.createElement("label");
emailInputLabel.htmlFor = "email-input";
emailInputLabel.textContent = "Email";
const emailErrorSpan = document.createElement("span");
const emailInputWrapper = inputWrapper.cloneNode(true);
emailInputWrapper.append(emailInputLabel, emailInput, emailErrorSpan);

const passwordInput = document.createElement("input");
passwordInput.id = "password-input";
passwordInput.name = "passwordInput";
passwordInput.type = "password";
const passwordInputLabel = document.createElement("label");
passwordInputLabel.htmlFor = "password-input";
passwordInputLabel.textContent = "Password";
const passwordErrorSpan = document.createElement("span");
const passwordInputWrapper = inputWrapper.cloneNode(true);

passwordInputWrapper.append(
  passwordInputLabel,
  passwordInput,
  passwordErrorSpan
);

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";

form.append(
  nameInputWrapper,
  emailInputWrapper,
  passwordInputWrapper,
  submitBtn
);

let isValidName;
let isValidEmail;
let isValidPassword;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  if (!isValidName || !isValidEmail || !isValidPassword) return;
  console.log(formData);
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});

nameInput.addEventListener("blur", (e) => {
  nameErrorSpan.textContent = "";
  if (e.target.value.length < 5) {
    nameErrorSpan.textContent = "Name is too short";
    isValidName = false;
    return;
  }
  isValidName = true;
});

emailInput.addEventListener("blur", (e) => {
  emailErrorSpan.textContent = "";
  if (e.target.value.length < 5) {
    emailErrorSpan.textContent = "Email is too short";
    isValidEmail = false;
    return;
  }
  
  if (!e.target.value.includes("@")) {
    isValidEmail = false;
    emailErrorSpan.textContent = 'Email must contain "@"';
    return;
  }
  isValidEmail = true;
});

passwordInput.addEventListener("blur", (e) => {
  passwordErrorSpan.textContent = "";
  if (e.target.value.length < 5) {
    passwordErrorSpan.textContent = "Password is too short";
    isValidPassword = false;
    return;
  }
  isValidPassword = true;
});
