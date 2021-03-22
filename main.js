//hero text anination
const heroText = document.getElementsByClassName('row')[0].firstElementChild
  .firstElementChild;

const text = "welcome to Akogwu's page. I hope you like this!";

let indexOfTextCharacter = 0;

function writeText() {
  heroText.innerText = text.slice(0, indexOfTextCharacter);

  indexOfTextCharacter++;
  if (indexOfTextCharacter > text.length - 1) {
    indexOfTextCharacter = 0;
  }
}
setInterval(writeText, 300);

//download buttons
const rowDivContainer = document.getElementsByClassName('row')[0];

const downloadBtns = rowDivContainer.getElementsByTagName('button');
for (eachBtn = 0; eachBtn < downloadBtns.length; eachBtn++) {
  let downloadBtn = downloadBtns[eachBtn];
  downloadBtn.addEventListener('click', (event) => {
    let clickedBtn = event.target;
    if (downloadBtn == downloadBtns[0]) {
      clickedBtn = 'Android App Downloaded';
    } else {
      clickedBtn = 'IOS App Downloaded';
    }
    downloadBtn.innerText = clickedBtn;
  });
}

const registerBtn = document.getElementsByClassName('form-section')[0]
  .children[0].lastElementChild;
registerBtn.addEventListener('click', () => {
  let registerBtnText = registerBtn.textContent;
  registerBtn.textContent = 'Registered Successfully';
  registerBtnText.textContent = registerBtnText;

  checkEmailInputField();
  checkEqualityOfPasswords();
});

const checkbox = registerBtn.previousElementSibling.children[0];
let label = checkbox.nextElementSibling;
checkbox.addEventListener('change', () => {
  //   let labelText = label.textContent;
  if (checkbox.checked == true) {
    label.innerText = 'you have agreed to our T&C';
  } else {
    label = checkbox.nextElementSibling.textContent;
  }
});

function checkEmailInputField() {
  const email = document.getElementsByClassName('input-field')[0]
    .firstElementChild;
  console.log(email);
  const emailValue = email.value.trim();
  if (emailValue === '') {
    email.nextElementSibling.innerText = 'email cannot be empty';
    const invalidEmailMsg = email.nextElementSibling;
  } else {
    email.nextElementSibling.innerText = 'email valid';
    const invalidEmailMsg = email.nextElementSibling;
  }
}

function checkEqualityOfPasswords() {
  const password = document.querySelector('.input-field').children[2];
  const passwordValue = password.value.trim();
  const confirmPassword = password.nextElementSibling;
  const confirmPasswordValue = confirmPassword.value.trim();
  if (passwordValue === confirmPasswordValue) {
    const passwordMatch = confirmPassword.nextElementSibling;
    passwordMatch.innerText = 'password match, you are good to go';
  } else {
    const passwordMatch = confirmPassword.nextElementSibling;
    passwordMatch.innerText = 'password do not match try again';
  }
}
