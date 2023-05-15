class Validator {
  email = (email) =>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  name = (name) =>/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(name);
  password = (password) =>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password);
}
const validate = new Validator();

function validateForm(form) {
  const allInputs = form.querySelectorAll("input");
  
  let result = true;
  
  function removeError(input) {
    const parent = input.parentNode
    
    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }
  
  function createError(input, text) {
    const parent = input.parentNode
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)
  }

  for (const input of allInputs) {
    removeError(input)
    if (input.dataset.required == "name") {
      if (validate.name(document.getElementById('name').value) == false) {       
        removeError(input)
        createError(input, 'некоректне імя')
        result = false
      }
    }
    if (input.dataset.required == "lastName") {
      if (validate.name(document.getElementById('lastName').value) == false) {       
        removeError(input)
        createError(input, 'некоректне прізвище')
        result = false
      }
    }
    if (input.dataset.required == "email") {
      if (validate.email(document.getElementById('email').value) == false) {       
        removeError(input)
        createError(input, 'некоректна почта')
        result = false
      }
    }
    if (input.dataset.required == "password") {
      if (validate.password(document.getElementById('password').value) == false) {       
        removeError(input)
        createError(input, 'ненадійний пароль')
        result = false
      }
    }
    if (input.dataset.required == "confirmPassword") {
      if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {       
        removeError(input)
        createError(input, 'введіть однаковий пароль')
        result = false
      }
    }
    
    if (input.dataset.required != "false") {
      if (input.value == "") {
        removeError(input)
        createError(input, 'заповніть поле')
        result = false
      }
    }
  }

  return result
}

document.getElementById("createForm").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm(this) == true) {
      alert('форма заповнена правильно')
    }
  });
