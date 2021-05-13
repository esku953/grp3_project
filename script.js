const form  = document.getElementsById('form');
const inputName = document.getElementById('myFormInput1');
const email = document.getElementById('myFormInput2');
const task = document.getElementById('myFormInput3');
const getError = document.getElementById('error');
console.log(form);

form[i].addEventListener('submit', (e) => {
    

    for (var i = 0 ; i < form.length; i++) {
      
      let messages = [];

     
    if (inputName.value === '' || inputName.value === null) {   
        messages.push('Name is required');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        getError.innerText = messages.join(',')
    }
    
    if (password.value.length <= 4) {
        messages.push('password not strong enough');
    }
   }
})


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