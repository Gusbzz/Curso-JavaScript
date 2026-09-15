// Manipulando elementos do DOM

const items = document.querySelector('.items')
const button = document.querySelector('.btn')


// console.log(items)

// items.firstElementChild.remove();
// items.lastElementChild.remove();

items.children[1].textContent = 'Item Um'

items.lastElementChild.innerHTML = '<h1>Hello World!</h1>';

button.style.background = 'red'