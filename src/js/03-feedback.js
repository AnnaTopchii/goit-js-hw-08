import throttle from 'lodash.throttle'

const FEEDBACK = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const formData = {};

const onFormInput = function (event) {
    formData[event.target.name] = event.target.value; 

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(FEEDBACK, formDataJSON);
};

const onFormSubmit = function (event) {
    event.preventDefault();

   const { elements: { email, message },} = event.currentTarget;

    if (email.value === '' || message.value === '') {
      return alert('Будь ласка, заповніть всі поля!');
    }

    const formDetails = { email: email.value, message: message.value };
    console.log(formDetails);
    

    event.currentTarget.reset();
    
    localStorage.removeItem(FEEDBACK);
    };


const savedInfoJSON = localStorage.getItem(FEEDBACK);
const parsedFormData = JSON.parse(savedInfoJSON);

updateForm();

function updateForm() {

    if (savedInfoJSON) {
    
    console.log(parsedFormData.email || '');
    console.log(parsedFormData.message || '');
        
    email.value = parsedFormData.email || '';
    message.value = parsedFormData.message || '';
    
    } 
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


