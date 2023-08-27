//Задание 1
//По данному url расположена задача:
//https://jsonplaceholder.typicode.com/todos/1
//В html предусмотреть div.
//Достать с сервера заголовок задачи и отобразить его в div.
const root = document.getElementById('root')
const requestURL = 'https://jsonplaceholder.typicode.com/todos/1';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onload = () => {
    const response = JSON.parse (xhr.response);
    root.innerHTML += response.title;
}
xhr.send();

//Задание 2
//Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
//Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
const request = 'https://jsonplaceholder.typicode.com/todos';
const xttp = new XMLHttpRequest();
xttp.open('GET', request);
xttp.onload = () => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    const response = JSON.parse(xttp.response);
    const slise = response.slice(0, 20);
    slise.forEach(element => {
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML += element.title; 
    });
}
xttp.send();