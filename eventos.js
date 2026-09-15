const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const items = document.querySelector('.items')

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    const nameValue = nameInput.value;
    console.log(nameValue);

    const emailValue = emailInput.value;
    console.log(emailValue);

    if (nameValue === '' || emailValue === '') {
        myForm.style.background = 'red'
        return alert('Please fill out all the fields')
    }

    items.firstElementChild.textContent = nameValue
    items.children[1].textContent = emailValue

    myForm.style.background = 'green'
});