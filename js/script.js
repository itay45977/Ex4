(function () {

  window.onload = init;
  function init(){
    var inputs = document.getElementsByTagName('input');
    var form = document.getElementById('form');
    var elem = document.createElement('div');
    var submitBtn = document.getElementById('submit-button');
    var checkboxes = document.querySelectorAll('[type=checkbox]');
    elem.id = 'notify';
    elem.style.display = 'none';
  
    let errorMessages = {
      fullName: 'Must contain atleast one space',
      pass: 'Must contain atleast one digit and one uppercase and lowercase letter, and atleast 8 or more characters',
      email: 'Must contain @ and . e.g example@exmaple.com',
      phone: 'Must contain 9 or 10 digits'
    }

    function getCbValidity(){
      let valid = false;

      for (let i = 0; i<checkboxes.length; i++){
        valid = valid || checkboxes[i].checked;
      }
      return valid;
    }
    function cbHandler(event){  
      let valid = getCbValidity();
      if(!valid){
        elem.textContent = 'Must select one checkbox atleast';
        elem.className = 'error';
        elem.style.display = 'block';
      }
    }
    checkboxes.forEach(cb=> cb.addEventListener('click', cbHandler));
    submitBtn.addEventListener('click',cbHandler);
    form.addEventListener('submit',function(event){
      if(!form.checkValidity() || !getCbValidity()){
        event.preventDefault();
      }
    })
    form.appendChild(elem);
    for (let input of inputs) {
      input.addEventListener('invalid', function (event) {
        event.preventDefault();
        if (!event.target.validity.valid) {
          input.className = 'invalid animated shake';
          elem.textContent = errorMessages[event.target.id];
          elem.className = 'error';
          elem.style.display = 'block';
        }
      });
  
      input.addEventListener('input', function (event) {
        if ('block' === elem.style.display) {
          input.className = '';
          elem.style.display = 'none';
        }
      });

      input.addEventListener('blur', function(event) {
        this.checkValidity();
      });

    }
  }


})();