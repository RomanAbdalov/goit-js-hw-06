const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

const formElements = event.currentTarget.elements;
    console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const  subscription = formElements.email.value;

    const formData = {
        mail,
        password,
        subscription
    }
console.log(formData);

if(mail.value || password.value) {
    alert("Email fields shoulds be empty");
    } else {
        alert("This form has been successfuly submitted!");
         };
    console.log(`This form has a username of ${mail} and password of ${password}`);
};
  

// const formData = new FormData(event.currentTarget); 