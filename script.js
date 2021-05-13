/*const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const getError = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (email) {
            email.addEventListener('keypress', function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            })
        }
         
        else  
    if (email.value === '' || email.value === null) {   
        messages.push('email is required');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        getError.innerText = messages.join(',')
    }
    
    if (password.value.length <= 4) {
        messages.push('password not strong enough');
    }
}) */

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()