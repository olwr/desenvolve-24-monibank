export default function isOfAge(field) {
    const birthday = new Date(field.value);

    if(!validateAge(birthday)) {
        field.setCustomValidity('O usuário não é maior de idade');
    }
};

function validateAge(date) {
    const currentDate = new Date();
    const dateOfAge = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= dateOfAge;
};