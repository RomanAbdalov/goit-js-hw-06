const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

//  const formData = new FormData(event.currentTarget); 

const formElements = event.currentTarget.elements;
    console.dir(formElements);

 const mail = formElements.email.value;
    const password = formElements.password.value;

    const  subscription = formElements.email.value;

    const formData = {
        mail,
        password,
         }

 if(mail.value || password.value) { 
    alert("Email fields shoulds be empty");
    } else
 {
        alert("This form has been successfuly submitted!");
        console.log(formData);
         };
         formElements.email.value = '';
         formElements.password.value = '';

    console.log(`This form has a username of ${mail} and password of ${password}`);
    
};




// const { email, password } = event.currentTarget.elements;

// if(email.value  || password.value ) {
//     return alert('Усі поля повинні бути заповнені');
// }

// const user = {
//     email: email.value,
//     password: password.value
// };

// console.log(user);

// loginForm.reset();
//  onFormSubmit(event) ;