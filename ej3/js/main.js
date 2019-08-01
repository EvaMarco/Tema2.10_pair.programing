'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');

const ENDPOINT = `https://api.github.com/users/${input.value}`;

function call() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => console.log(data))
};

button.addEventListener('click', call);