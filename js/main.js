import isOfAge from "./validate-age.js";
import validateCPF from "./validate-cpf.js";
import { errTypes, messages } from "./err-types.js";

// Elements
const formFields = document.querySelectorAll('[required]');
const form = document.querySelector('[data-formulario]');

// Functions
function verifyField(field) {
    let message = '';
    field.setCustomValidity('');

    if(field.name === 'cpf' && field.value.length >= 11) {
        validateCPF(field);
    };

    if(field.name === 'aniversario' && field.value != '') {
        isOfAge(field);
    };

    errTypes.forEach(err => {
        if (field.validity[err]) {
            message = messages[field.name][err];
            console.log(message);
        }
    });

    const errMessage = field.parentNode.querySelector('.mensagem-erro');
    const inputValidation = field.checkValidity();

    if(!inputValidation) {
        errMessage.textContent = message;
    } else {
        errMessage.textContent = '';
    }
}

// Events
formFields.forEach((field) => {
    field.addEventListener('blur', () => verifyField(field));
    field.addEventListener('invalid', e => e.preventDefault());
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const repliesList = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario': e.target.elements['aniversario'].value
    };

    localStorage.setItem('cadastro', JSON.stringify(repliesList));

    window.location.href = './abrir-conta-form-2.html';
})
