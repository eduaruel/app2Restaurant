const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#nombre-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#password-input2');
const btnRegistro = document.querySelector('#form-btn');

// validamos
// validacion con regex

const nameVal = /^[A-Z]{1}[ a-zA-Z]+([a-zA-Z]+)?$/g;
const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!#$%&'*.+/=?^_`{|}~-]).{8,16}$/gm

let valname = false;
let valemail = false;
let valpass = false;
let valmatch = false;

nameInput.addEventListener('input', e => {//debemos modificar los bordes 
    valname = nameVal.test(e.target.value);
    // console.log(valname);
    validar(nameInput, valname)

})

emailInput.addEventListener('input', e => {
    valemail = emailVal.test(e.target.value);
    validar(emailInput, valemail);
})
passwordInput.addEventListener('input', e => {
    valpass = passwordVal.test(e.target.value);
    validar(passwordInput, valpass);
    console.log(valpass);
    validar(matchInput, valmatch)
})

matchInput.addEventListener('input', e => {
    valmatch = e.target.value === passwordInput.value;
    validar(matchInput, valmatch);
    validad(passwordInput, valpass)
})

const validar = (input, value) => {
    btnRegistro.disabled = valname && valpass && valmatch ? false : true;
    console.log(btnRegistro.disabled);

    if (value) {
        input.classList.remove('focus:outline-blue-600', 'outline-4');
        input.classList.remove('focus:outline-red-700', 'outline-4');
        input.classList.add('focus:outline-green-700', 'outline-4');
    } else if (input.value === '') {
        input.classList.remove('focus:outline-green-700', 'outline-4');
        input.classList.remove('focus:outline-red-700', 'outline-4');
        input.classList.add('focus:outline-blue-600', 'outline-4');
    } else {
        input.classList.remove('focus:outline-blue-600', 'outline-4');
        input.classList.remove('focus:outline-green-700', 'outline-4');
        input.classList.add('focus:outline-red-700', 'outline-4');
    }
}