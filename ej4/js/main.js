'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');

function call() {
    const ENDPOINT = `https://api.github.com/users/${input.value}`;
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => console.log(data))
};

button.addEventListener('click', call);