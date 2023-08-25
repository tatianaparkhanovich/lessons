//Задание 1
const contentBlocks = document.querySelectorAll('.tabcontent');
const buttons = document.querySelectorAll('button');

buttons.forEach(item => {
    item.addEventListener('click', (event) => {
        openTab(event, item.id);
    })
})
function openTab(event, id) {
    contentBlocks.forEach(item => {
        item.classList.remove('active');
    })
    buttons.forEach(item => {
        item.classList.remove('active');
    })
    const tabContents = document.getElementById(id + '-content');
    tabContents.classList.add('active');
    const pressButton = event.target;
    pressButton.classList.add('active');
}

//Задание 2
const button = document.querySelector('.btn-btn');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        button.textContent = 'Включить cветлую тему';
    } else {
        button.textContent = 'Включить темную тему';
    }
})  





