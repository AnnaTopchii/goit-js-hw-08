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
    console.log(formData);
    event.currentTarget.reset();
    
    localStorage.removeItem(FEEDBACK);
};

updateForm();

function updateForm() {
    const savedInfo = localStorage.getItem(FEEDBACK);
    if (savedInfo) {
        try {
            const parsedFormData = JSON.parse(FEEDBACK);
            console.log(parsedFormData.email);
            console.log(parsedFormData.message);
    
            email.value = parsedFormData.email;
            message.textContent = parsedFormData.message;

        } catch (error) {
            console.log(error.name); // "SyntaxError"
            console.log(error.message); // "Unexpected token u in JSON at position 1"
        }
    }
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('supmit', onFormSubmit);


