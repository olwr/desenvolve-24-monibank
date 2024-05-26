export default function validateCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    if (validateRepeatedN(cpf) || validateFirstD(cpf) || validateSecondD(cpf)) {
        field.setCustomValidity('CPF inválido');
    };
};


function validateRepeatedN(cpf) {
    const repeated = /(.)\1{10}/.test(cpf);
    return repeated;
};

function validateFirstD(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    };

    sum = (sum * 10) % 11;

    if (sum === 10 || sum === 11) {
        sum = 0;
    }

    return sum != cpf[9];
};

function validateSecondD(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let i = 0; i < 10; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    };

    sum = (sum * 10) % 11;

    if (sum === 10 || sum === 11) {
        sum = 0;
    }

    return sum != cpf[10];
};