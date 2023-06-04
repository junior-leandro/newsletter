const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  //Uso de REGEX para confirmar o conteudo do input

  const form = document.querySelector('form');
  const message = document.querySelector('.thanks');
  const input = document.querySelector('input[name="email"]');
  const label = document.querySelector('#error-message');
  const section = document.querySelector('.content');
  const leftSection = document.querySelector('.left-section');
  const rigthSection = document.querySelector('.rigth-section');
  const buttonContinue = document.querySelector('.dismiss-button')
  let isValideForm = false;
  let emailSpan = document.querySelector('#email-variable');

  const validateInput = () =>{
    isValideForm = true;
    if(!isValidEmail(input.value)){
        input.classList.add("error-border", "email-input-error");
        label.classList.remove("hidden");
        isValideForm = false;
        

    }
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
    if (isValideForm){
        message.classList.remove('hidden');
        leftSection.classList.add('hidden');
        rigthSection.classList.add('hidden');
        section.classList.add('subscribed-finish');
        emailSpan.textContent = input.value;
        
        console.log ('VAI QUE É TUA TAFAREU');
    }
  });

  input.addEventListener('input', () =>{
    input.classList.remove("error-border", "email-input-error");
    label.classList.add("hidden");

  });

  
buttonContinue.addEventListener("click", function (e) {
  e.preventDefault();

  document.location.reload(true);

});